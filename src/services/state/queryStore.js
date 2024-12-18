import { create } from 'zustand';

export const useQueryStore = create((set) => ({
  searchQuery: '',
  setSearchQuery: (newSearchQuery) => set({ searchQuery: newSearchQuery })
}));
