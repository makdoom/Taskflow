import { create } from "zustand";

type DialogeStore = {
  openFor: string;
  isOpen: boolean;
  onOpen: (text: string) => void;
  onClose: () => void;
};

export const useDialoge = create<DialogeStore>((set) => ({
  openFor: "",
  isOpen: false,
  onOpen: (text) => set({ isOpen: true, openFor: text }),
  onClose: () => set({ isOpen: false, openFor: "" }),
}));
