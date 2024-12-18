import { noAuthInstance } from './axios';

export const signIn = async ({ email, password }) => {
  console.log(password);

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

  return response.data;
};

export const getSession = async () => {
  console.log('Attempting to get session');

  const response = await noAuthInstance.get('/session', {
    withCredentials: true,
    headers: {
      'X-1TIME-TKN': 'lou'
    }
  });

  return response.data;
};
