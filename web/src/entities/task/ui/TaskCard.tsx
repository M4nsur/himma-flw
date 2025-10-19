import type { TaskCardProps } from "../model/types";
import { Button } from "@/shared/ui/button";
import { Icon } from "@/shared/ui/icon/Icon";
export const TaskCard = ({ task, onEdit, onDelete }: TaskCardProps) => {
  return (
    <div>
      <div>checkbox</div>
      <div>
        <div>{task.title}</div>
        <div>{task.description}</div>
        <div>{task.dueDate}</div>
      </div>
      <div className="flex">
        <Button onClick={() => onEdit?.(task.id)} className="flex gap-2">
          <Icon name="pencil" />
        </Button>
        <Button onClick={() => onDelete?.(task.id)}>
          <Icon name="trash" />
        </Button>
      </div>
    </div>
  );
};
