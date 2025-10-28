import { Button } from "@/shared/ui/button";
import { Icon } from "@/shared/ui/icon/Icon";
import { useEditTask } from "../model/useEditTask";
import type { TaskCardType } from "@/entities/task";

interface EditTaskButtonProps {
  task: TaskCardType;
}

const EditTaskButton = ({ task }: EditTaskButtonProps) => {
  const { handleEditTask } = useEditTask();
  const handleClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    handleEditTask(task, "edit");
  };

  return (
    <Button
      onClick={handleClick}
      className="flex hover:bg-bg-button-hover bg-bg-button"
    >
      <Icon name="pencil" className="w-4 h-4" />
    </Button>
  );
};

export default EditTaskButton;
