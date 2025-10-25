import type { TaskCardType } from "@/entities/task";
import { TaskCard } from "@/entities/task/ui/TaskCard";

type DrawerMode = "view" | "edit";
interface TaskListProps {
  tasks: TaskCardType[];
  variant?: "active" | "completed";
  title?: string;
  onOpenDrawer: (task: TaskCardType, mode: DrawerMode) => void;
  onDeleteTask: (id: number) => void;
}

export const TaskList = ({
  tasks,
  variant = "active",
  onOpenDrawer,
  onDeleteTask,
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
            onOpenDrawer={onOpenDrawer}
            onDeleteTask={onDeleteTask}
            key={task.id}
            task={task}
          />
        ))}
      </div>
    </section>
  );
};
