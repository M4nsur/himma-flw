export type Priority = "low" | "medium" | "high";

export interface TaskCardType {
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
  task: TaskCardType;
  onDelete?: (id: number) => void;
  onEdit?: (task: TaskCardType) => void;
}
