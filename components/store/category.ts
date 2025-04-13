import { create } from 'zustand';

type ActiveId = number | null

interface State {
  activeId: ActiveId;
  setActiveId: (activeId: number) => void;
}

export const useCategoryStore = create<State>()((set) => ({
  activeId: null,
  setActiveId: (activeId: ActiveId) => set({ activeId }),
}));