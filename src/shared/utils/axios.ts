import axios from "axios";

export const fetcher = axios.create({
  baseURL: "/api",
  timeout: 5000,
  headers: {
    "Content-Type": "application/json",
  },
});

fetcher.interceptors.request.use(
  config => {
    const token = localStorage.getItem("accessToken");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  error => {
    return Promise.reject(new Error(`Request interceptor error: ${error.message}`));
  },
);

export const fileFetcher = axios.create({
  baseURL: "/api",
  timeout: 5000,
});

fileFetcher.interceptors.request.use(
  config => {
    const token = localStorage.getItem("accessToken");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  error => {
    return Promise.reject(new Error(`Request interceptor error: ${error.message}`));
  },
);
