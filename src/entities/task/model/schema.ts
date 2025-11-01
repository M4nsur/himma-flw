import { z } from "zod";

export const TaskFormSchema = z.object({
  title: z.string().min(3, "Title must be at least 3 characters long"),
  description: z.string().optional(),
  dueDate: z.date().optional(),
  category: z.string().optional(),
  priority: z.enum(["low", "medium", "high"]),
  pomodoro: z.number().optional(),
  status: z.enum(["pending", "in_progress", "completed", "cancelled"]),
});

export const TaskDtoSchema = z.object({
  id: z.string(),
  title: z.string(),
  description: z.string().optional(),
  dueDate: z.string().optional(),
  category: z.string().optional(),
  priority: z.enum(["low", "medium", "high"]),
  pomodoro: z.number().optional(),
  status: z.enum(["pending", "in_progress", "completed", "cancelled"]),
  createdAt: z.string(), // ISO строка
  completedAt: z.string().optional(),
});
