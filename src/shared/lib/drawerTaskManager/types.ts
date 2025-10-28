export type Priority = "low" | "medium" | "high";
export type drawerMode = "view" | "edit";

export interface DrawerState<T> {
  isOpen: boolean;
  data: T | null;
  mode: drawerMode;

  openDrawer: (data: T, mode: "view" | "edit") => void;
  closeDrawer: () => void;
  setMode: (mode: "view" | "edit") => void;
}
