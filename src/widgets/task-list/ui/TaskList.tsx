import type { Task } from "@/entities/task";
import { TaskCard } from "@/entities/task/ui/TaskCard";

interface TaskListProps {
  tasks: Task[];
  variant: "active" | "completed";
  title?: string;
}

export const TaskList = ({ tasks, variant }: TaskListProps) => {
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
          <TaskCard key={task.id} task={task} />
        ))}
      </div>
    </section>
  );
};
