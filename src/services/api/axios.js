import axios from 'axios';
import { useAuthStore } from '../state/authStore';

// Build a system for being in dev mode or prod mode!
const BASE_URL = 'http://localhost:3000/api';
//const BASE_URL = 'https://smiling-kerstin-afnan-we-2f62af17.koyeb.app/api';

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
  async (error) => {
    console.log(error.response.status);
    console.log(error.response.data.message);
    const originalRequest = error.config;

    if (error.response.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;

      const response = await refreshInstance.get('/session/token', {
        withCredentials: true
      });

      const { setAccessToken } = useAuthStore.getState();
      setAccessToken(response.data.aTkn);

      originalRequest.headers.Authorization = `Bearer ${response.data.aTkn}`;
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

const refreshInstance = axios.create({
  baseURL: BASE_URL,
  headers: {
    'Content-Type': 'application/json',
    'X-SURF': 'okl'
  }
});
