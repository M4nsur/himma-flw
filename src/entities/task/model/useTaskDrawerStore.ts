import type { TaskCardType } from "@/entities/task/";
import { createDrawerStore } from "@/shared/lib/drawerTaskManager";

export const useTaskDrawerStore = createDrawerStore<TaskCardType>("taskDrawer");
