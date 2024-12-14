// This file holds requests that hit our API, but then
// our API makes requests to external services or retrieves 3rd party
// data

import axios from 'axios';
import { authInstance } from '../axios';

export const getNews = async () => {
  const response = await authInstance.get('/external-services/news');

  console.log(response.data.news);
  return response.data;
};

// Temporarily here, the env var, probably should convert it to use
// the backend
export const getImages = async (query) => {
  const response = await axios.get(
    `https://api.pexels.com/v1/search?query=${query}&per_page=9&orientation=landscape`,
    {
      headers: {
        Authorization: import.meta.env.VITE_PEXELS_KEY
      }
    }
  );

  console.log(response.data.photos);
  return response.data.photos;
};
