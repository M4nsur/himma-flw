import { createDrawerStore } from "./drawerStore";
import type { TaskCardType } from "./types";


export const useTaskDrawerStore = createDrawerStore<TaskCardType>("taskDrawer");
