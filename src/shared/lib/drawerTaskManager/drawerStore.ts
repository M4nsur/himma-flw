// shared/store/drawerStore.ts
import { create } from "zustand";
import { devtools } from "zustand/middleware";
import type { DrawerState } from "./types";

export const createDrawerStore = <T>(name: string = "drawer") => {
  return create<DrawerState<T>>()(
    devtools(
      (set) => ({
        isOpen: false,
        data: null,
        mode: "view",

        openDrawer: (data, mode) => {
          set({ isOpen: true, data, mode });
        },

        closeDrawer: () => {
          set({ isOpen: false, data: null, mode: "view" });
        },

        setMode: (mode) => {
          set({ mode });
        },
      }),
      { name }
    )
  );
};