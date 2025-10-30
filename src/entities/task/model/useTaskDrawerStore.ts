import type { TaskCardType } from "./types";
import { createDrawerStore } from "@/shared/lib/drawerTaskManager";

export const useTaskDrawerStore = createDrawerStore<TaskCardType>("taskDrawer");
