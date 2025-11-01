import type { TaskCardType } from "@/shared/lib/validation/taskSchema";
import { createDrawerStore } from "@/shared/lib/drawerTaskManager";

export const useTaskDrawerStore = createDrawerStore<TaskCardType>("taskDrawer");
