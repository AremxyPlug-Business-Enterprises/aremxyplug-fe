const normalizeBaseUrl = (url) => {
  if (!url) return url;
  return url.endsWith("/") ? url.slice(0, -1) : url;
};

const legacyBaseUrl =
  process.env.NODE_ENV === "production"
    ? process.env.REACT_APP_API_BASE_URL_PROD
    : process.env.REACT_APP_API_BASE_URL_DEV;

export const BASE_URL = normalizeBaseUrl(
  process.env.REACT_APP_API_BASE_URL || legacyBaseUrl
);

export const WS_BASE_URL = normalizeBaseUrl(
  process.env.REACT_APP_WS_BASE_URL ||
    (BASE_URL
      ? BASE_URL.replace(/^https:/, "wss:").replace(/^http:/, "ws:")
      : undefined)
);

export const SIGNUP_ENABLED =
  `${process.env.REACT_APP_SIGNUP_ENABLED ?? "true"}`.toLowerCase() === "true";
