// This file holds requests that hit our API, but then
// our API makes requests to external services or retrieves 3rd party
// data

import axios from 'axios';
import { authInstance } from '../axios';

export const getNews = async () => {
  const response = await authInstance.get('/external-services/news');

  return response.data;
};

// This works locally
export const getImages = async (query) => {
  const response = await authInstance.get(
    `/external-services/pexels/search?query=${query}`
  );

  return response.data;
};
