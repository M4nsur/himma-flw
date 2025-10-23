import type { TaskCardType } from "@/entities/task";
import { TaskCard } from "@/entities/task/ui/TaskCard";

interface TaskListProps {
  tasks: TaskCardType[];
  variant?: "active" | "completed";
  title?: string;
  onOpen: (task: TaskCardType) => void;
  onEdit: (task: TaskCardType) => void;
  onDelete: (id: number) => void;
}

export const TaskList = ({
  tasks,
  variant = "active",
  onDelete,
  onEdit,
}: TaskListProps) => {
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
            onDelete={onDelete} 
            onEdit={onEdit}
            key={task.id}
            task={task}
          />
        ))}
      </div>
    </section>
  );
};
