// apiClient.js
import axios from 'axios';
import { BASE_URL } from '../../config';

const axiosInstance = axios.create({
  baseURL: BASE_URL,
  withCredentials: true,
});

// Request interceptor
axiosInstance.interceptors.request.use(config => {

    config.headers['Content-Type'] = 'application/json';
  
  return config;
});

// Response interceptor
axiosInstance.interceptors.response.use(
  response => {
   
   return response;
  },
  async error => {
    const retryCount = error.config.__retryCount || 0;
    if (retryCount >= 1) return Promise.reject(error);
    error.config.__retryCount = retryCount + 1;
  }
);

export default axiosInstance;
