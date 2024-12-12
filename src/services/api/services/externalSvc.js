// This file holds requests that hit our API, but then
// our API makes requests to external services or retrieves 3rd party
// data

import { authInstance } from '../axios';

export const getNews = async () => {
  const response = await authInstance.get('/external-services/news');

  console.log(response.data.news);
  return response.data;
};
