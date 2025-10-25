import type { TaskCardType } from "../model/types";

interface TaskInfoProps {
  task: TaskCardType;
}

export const TaskInfo = ({ task }: TaskInfoProps) => {
  return (
    <div>
      <div className="text-text-secondary space-y-2">
        <p>{task.description}</p>
        <p className="text-sm">Deadline: {task.dueDate}</p>
      </div>
    </div>
  );
};
