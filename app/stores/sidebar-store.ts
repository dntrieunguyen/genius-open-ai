import { create } from 'zustand';

export interface SidebarState {
   isOpen: Boolean;
   isMinimal: Boolean;
   handleOpenOrClose: () => void;
   handleClose: () => void;
   handleChangeSideBar: () => void;
}

export const useSideBarStore = create<SidebarState>()(set => ({
   isOpen: false,
   isMinimal: false,
   handleOpenOrClose: () => set(state => ({ ...state, isOpen: !state.isOpen })),
   handleClose: () => set(state => ({ ...state, isOpen: false })),
   handleChangeSideBar: () =>
      set(state => ({ ...state, isMinimal: !state.isMinimal })),
}));
