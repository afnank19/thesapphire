import axios from 'axios';
import { useAuthStore } from '../state/authStore';

const BASE_URL = 'http://localhost:8080/api';

export const authInstance = axios.create({
  baseURL: BASE_URL,
  headers: {
    'Content-Type': 'application/json',
    'X-SURF': 'okl'
  }
});

// Takes two functions, one runs on success, one runs on error, handle accordingly
authInstance.interceptors.request.use(
  (config) => {
    const accessToken = useAuthStore.getState().accessToken;

    config.headers.Authorization = `Bearer ${accessToken}`;

    return config;
  },
  (error) => {
    Promise.reject(error);
  }
);

authInstance.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    console.log(error.response.status);
    const originalRequest = error.config;

    if (error.response.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;

      console.log('Fetch new tokens here');

      return authInstance(originalRequest);
    }

    return Promise.reject(error);
  }
);

export const noAuthInstance = axios.create({
  baseURL: BASE_URL,
  headers: {
    'Content-Type': 'application/json'
  }
});
