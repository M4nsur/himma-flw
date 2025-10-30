import type { AddTaskFormValues } from "./schema";

export const PRIORITY_OPTIONS = [
  { label: "Low", value: "low" },
  { label: "Medium", value: "medium" },
  { label: "High", value: "high" },
];

export const STATUS_OPTIONS = [
  { label: "Pending", value: "pending" },
  { label: "In_progress", value: "in_progress" },
  { label: "Completed", value: "completed" },
  { label: "Cancelled", value: "cancelled" },
];

export const DEFAULT_TASK_VALUES: Partial<AddTaskFormValues> = {
  priority: "medium",
  status: 'pending',
  pomodoro: 0,
};

