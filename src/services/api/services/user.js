import { useAuthStore } from '../../state/authStore';
import { authInstance, noAuthInstance } from '../axios';

export const fetchUserProfile = async (id) => {
  const response = await authInstance.get(`/users/${id}`);

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

  localStorage.setItem('__r_tkn', response.data.rTkn);
  return response.data;
};

// This works in DEV, update prod for it to work
export const updateUserAbout = async ({ newAbout }) => {
  const id = useAuthStore.getState().id;

  const response = await authInstance.patch(`/users/${id}/about`, {
    about: newAbout
  });

  return response.data;
};
