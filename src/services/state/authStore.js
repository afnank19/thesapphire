import { create } from 'zustand';

export const useAuthStore = create((set) => ({
  accessToken: '',
  id: '',
  setAccessToken: (newAccessToken) => set({ accessToken: newAccessToken }),
  setUserId: (newId) => set({ id: newId })
}));
