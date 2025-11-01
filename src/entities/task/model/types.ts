import type { z } from "zod";
import { TaskFormSchema, TaskDtoSchema } from "./schema";

export type TaskFormTypes = z.infer<typeof TaskFormSchema>;

export type TaskDTO = z.infer<typeof TaskDtoSchema>;

export type Task = Omit<TaskDTO, "dueDate" | "createdAt" | "completedAt"> & {
  dueDate?: Date;
  createdAt: Date;
  completedAt?: Date;
};

export type TaskCardType = Task;

export interface TaskCardProps {
  task: TaskCardType;
  actions: React.ReactNode;
}

export type Priority = "low" | "medium" | "high";
export type TaskStatus = "pending" | "in_progress" | "completed" | "cancelled";
