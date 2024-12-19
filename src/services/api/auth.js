import { noAuthInstance } from './axios';

export const signIn = async ({ email, password }) => {
  const response = await noAuthInstance.post(
    '/session',
    {
      email: email,
      password: password
    },
    {
      withCredentials: true
    }
  );

  localStorage.setItem('__r_tkn', response.data.rTkn);
  return response.data;
};

export const getSession = async () => {
  const rToken = localStorage.getItem('__r_tkn');

  const response = await noAuthInstance.get('/session', {
    withCredentials: true,
    headers: {
      'X-1TIME-TKN': 'lou',
      Authorization: `Bearer ${rToken}`
    }
  });

  localStorage.setItem('__r_tkn', response.data.rTkn);
  return response.data;
};
