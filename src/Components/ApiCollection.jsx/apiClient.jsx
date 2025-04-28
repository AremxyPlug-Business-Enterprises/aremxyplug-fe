// apiClient.js
import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'https://aremxyplug.onrender.com/api/v1',
  withCredentials: true,
});

// Request interceptor
axiosInstance.interceptors.request.use(config => {
  const token = localStorage.getItem('authorisedLogin') || localStorage.getItem('getToken');
  if (token) {
    config.headers.Authorization = token;
    config.headers['Content-Type'] = 'application/json';
  }
  return config;
});

// Response interceptor
axiosInstance.interceptors.response.use(
  response => {
    const newToken = response.headers['x-new-auth-token'] || response.headers['Authorization'];
    if (newToken) {
      localStorage.setItem('authorisedLogin', newToken);
      axiosInstance.defaults.headers.common['Authorization'] = newToken;
    }
    return response;
  },
  async error => {
    const retryCount = error.config.__retryCount || 0;
    if (retryCount >= 1) return Promise.reject(error);
    error.config.__retryCount = retryCount + 1;

    const originalRequest = error.config;
    const newToken = error.response?.headers['x-new-auth-token'];

    if (newToken) {
      localStorage.setItem('authorisedLogin', newToken);
      originalRequest.headers.Authorization = newToken;
      return axiosInstance(originalRequest);
    }

    return Promise.reject(error);
  }
);

export default axiosInstance;