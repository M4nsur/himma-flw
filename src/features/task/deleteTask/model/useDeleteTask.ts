import { useCallback, useState } from "react";
import { useTaskDrawerStore } from "@/shared/lib/index";
export const useDeleteTask = () => {
  const [isDeleting, setIsDeleting] = useState(false);
  const closeDrawer = useTaskDrawerStore((state) => state.closeDrawer);

  const handleDeleteTask = useCallback(async (taskId: string) => {
    setIsDeleting(true);
    try {
      console.log("Deleting task:", taskId);
      closeDrawer();
    } catch (error) {
      console.error("Error deleting task:", error);
    } finally {
      setIsDeleting(false);
    }
  }, [closeDrawer]);
  return {
    isDeleting,
    handleDeleteTask,
  };
};
