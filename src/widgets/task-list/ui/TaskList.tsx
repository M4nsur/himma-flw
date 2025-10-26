// widgets/task-list/ui/TaskList.tsx
import type { TaskCardType } from "@/entities/task";
import { TaskCard } from "@/entities/task/ui/TaskCard";
import { DeleteTaskButton } from "@/features/task/deleteTask";

import EditTaskButton from "@/features/task/editTask/ui/EditTaskButton";

interface TaskListProps {
  tasks: TaskCardType[];
  variant?: "active" | "completed";
}

export const TaskList = ({ tasks, variant = "active" }: TaskListProps) => {
  const filteredTasks =
    variant === "active"
      ? tasks.filter((t) => !t.completed)
      : tasks.filter((t) => t.completed);

  const title = variant === "active" ? "Upcoming tasks" : "Completed task";

  return (
    <section className={variant === "completed" ? "mt-10" : ""}>
      {title && <h2 className="mb-4 font-bold text-2xl">{title}</h2>}
      <div className="flex flex-wrap gap-4">
        {filteredTasks.map((task) => (
          <TaskCard
            key={task.id}
            task={task}
            actions={
              <>
                <EditTaskButton task={task} />

                <DeleteTaskButton taskId={task.id} variant="icon" />
              </>
            }
          />
        ))}
      </div>
    </section>
  );
};
