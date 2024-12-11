import { authInstance, noAuthInstance } from '../axios';

export const fetchUserProfile = async (id) => {
  console.log(id);

  const response = await authInstance.get(`/users/${id}`);

  console.log(`HITTING: /users/${id}`);
  console.log(response.data);
  return response.data;
};

export const registerUser = async ({ name, email, password, cms, campus }) => {
  const response = await noAuthInstance.post(
    `/users/`,
    {
      name: name,
      email: email,
      password: password,
      cms: cms,
      campus: campus
    },
    { withCredentials: true }
  );

  console.log(response.data);
  return response.data;
};
