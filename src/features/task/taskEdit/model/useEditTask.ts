import { useTaskDrawerStore } from "@/shared/lib/drawerTaskManager/index";
import type { TaskCardType } from "@/entities/task/";
import type { drawerMode } from "@/shared/lib/drawerTaskManager/types";

export const useEditTask = () => {
  const openDrawer = useTaskDrawerStore((state) => state.openDrawer);

  const handleEditTask = (task: TaskCardType, mode: drawerMode) => {
    openDrawer(task, mode);
  };
  return { handleEditTask };
};
