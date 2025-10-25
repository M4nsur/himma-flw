import type { TaskCardType } from "@/entities/task/model/types";
import { useCallback, useState } from "react";
import type {
  DrawerMode,
  DrawerState,
  UseTaskDrawerReturn,
} from "./types";

export const useTaskDrawer = (): UseTaskDrawerReturn => {
  const [drawerState, setDrawerState] = useState<DrawerState>({
    isOpen: false,
    task: null,
    mode: "view",
  });

  const [isSaving, setIsSaving] = useState(false);
  const [isDeleting, setIsDeleting] = useState(false);

  const openDrawer = useCallback((task: TaskCardType, mode: DrawerMode) => {
    console.log("open drw");
    setDrawerState({
      isOpen: true,
      task,
      mode,
    });
  }, []);

  const closeDrawer = useCallback(() => {
    setDrawerState({
      isOpen: false,
      task: null,
      mode: "view",
    });
  }, []);

  const setActiveTab = useCallback((tabsValue: DrawerMode) => {
    setDrawerState((prev) => ({
      ...prev,
      mode: tabsValue,
    }));
  }, []);

  const handleSaveTask = useCallback(
    async (updatedTask: TaskCardType) => {
      try {
        setIsSaving(true);
        console.log("post", updatedTask);
        console.log("saved");
        closeDrawer();
      } catch {
        console.log("error");
      } finally {
        setIsSaving(false);
      }
    },
    [closeDrawer]
  );

  const handleDeleteTask = useCallback(
    async (taskId: number) => {
      setIsDeleting(true);
      try {
        console.log("Deleting task:", taskId);
      } catch (error) {
        console.error("Error deleting task:", error);
      } finally {
        setIsDeleting(false);
        closeDrawer();
      }
    },
    [closeDrawer]
  );

  return {
    drawerState,
    isSaving,
    isDeleting,
    openDrawer,
    closeDrawer,
    setActiveTab,
    handleSaveTask,
    handleDeleteTask,
  };
};
