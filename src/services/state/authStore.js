import { create } from 'zustand';

export const useAuthStore = create((set) => ({
  accessToken: '',
  setAccessToken: (newAccessToken) => set({ accessToken: newAccessToken })
}));
