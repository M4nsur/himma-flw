import type { TaskCardType } from "@/entities/task";

export type DrawerMode = "view" | "edit";

export interface DrawerState {
  isOpen: boolean;
  task: TaskCardType | null;
  mode: DrawerMode;
}

export interface UseTaskDrawerReturn {
  drawerState: DrawerState;
  handleSaveTask: (updatedTask: TaskCardType) => Promise<void>;
  handleDeleteTask: (taskId: number) => Promise<void>;
  openDrawer: (task: TaskCardType, mode: DrawerMode) => void;
  closeDrawer: () => void;
  setActiveTab: (tab: DrawerMode) => void;
  isSaving: boolean;
  isDeleting: boolean;
}
