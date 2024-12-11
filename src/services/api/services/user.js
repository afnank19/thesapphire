import { authInstance } from '../axios';

export const fetchUserProfile = async (id) => {
  console.log(id);

  const response = await authInstance.get(`/users/${id}`);

  console.log(`HITTING: /users/${id}`);
  console.log(response.data);
  return response.data;
};
