import { create } from 'zustand';

export const useCategoryStore = create((set) => ({
  activeCategory: 'Latest',
  setActiveCtgry: (newCategory) => set({ activeCategory: newCategory })
}));
