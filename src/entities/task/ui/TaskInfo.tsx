import Linkify from "linkify-react";
import type { TaskCardType } from "../model/types";

interface TaskInfoProps {
  task: TaskCardType;
}

export const TaskInfo = ({ task }: TaskInfoProps) => {
  return (
    <div>
      <div className="text-text-secondary space-y-2">
        <Linkify>{task.description}</Linkify>
        <p className="text-sm">Deadline: {task.dueDate}</p>
      </div>
    </div>
  );
};
