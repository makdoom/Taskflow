import { create } from "zustand";

type BoardSidebarType = {
  isOpen: boolean;
  toggle: () => void;
};

export const useBoardSidebar = create<BoardSidebarType>((set, get) => ({
  isOpen: true,
  toggle: () => set({ isOpen: !get().isOpen }),
}));
