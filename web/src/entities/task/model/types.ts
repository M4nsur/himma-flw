export type Priority = "low" | "medium" | "high";

export interface Task {
  id: number;
  title: string;
  description: string;
  completed: boolean;
  completedAt: string | null;
  priority: Priority;
  dueDate: string;
  pomodoros: number;
  category: string | null;
}

export interface TaskCardProps {
  task: Task;
  onDelete?: (id: number) => void;
  onEdit?: (id: number) => void;
}
