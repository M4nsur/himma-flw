import type { TaskCardType } from "@/entities/task";

import { createDrawerStore } from "./drawerStore";

export const useTaskDrawerStore = createDrawerStore<TaskCardType>("taskDrawer");
