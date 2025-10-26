import { Button } from "@/shared/ui/button";
import { Icon } from "@/shared/ui/icon/Icon";
import { useDeleteTask } from "../model/useDeleteTask";

interface DeleteTaskButtonProps {
  taskId: string;
  variant?: "icon" | "text";
  className?: string;
}

export const DeleteTaskButton = ({
  taskId,
  variant = "icon",
  className,
}: DeleteTaskButtonProps) => {
  const { isDeleting, handleDeleteTask } = useDeleteTask();

  const handleClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    handleDeleteTask(taskId);
  };

  if (variant === "text") {
    return (
      <Button
        onClick={handleClick}
        disabled={isDeleting}
        variant="ghost"
        className={`${className} text-text-secondary hover:text-text-error hover:bg-bg-tertiary flex items-center gap-2`}
      >
        <Icon name="trash" className="w-4 h-4" />
        {isDeleting ? "Deleting..." : "Delete"}
      </Button>
    );
  }

  return (
    <Button
      onClick={handleClick}
      disabled={isDeleting}
      className={className || "bg-bg-secondary"}
    >
      <Icon name="trash" />
    </Button>
  );
};
