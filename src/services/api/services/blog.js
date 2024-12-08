import { authInstance } from '../axios';

export const fetchBlogs = async ({ pageParam }) => {
  console.log(pageParam);

  const response = await authInstance.get('/blogs/');

  console.log(response.data);
  return response.data;
};
