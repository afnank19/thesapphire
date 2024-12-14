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

export const getImages = async (query) => {
  console.log(query);

  const response = await axios.get(
    `https://api.pexels.com/v1/search?query=${query}&per_page=9&orientation=landscape`,
    {
      headers: {
        Authorization:
          'qwn3SNRa6SQStwEY8zHoVrWUkkJwNcBAbfFhlw8AmEpfs8EMVTuygYIL'
      }
    }
  );

  console.log(response.data.photos);
  return response.data.photos;
};
