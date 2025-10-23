import { z } from "zod";

export const addTaskSchema = z.object({
  title: z.string().min(3, "Title must be at least 3 characters long"),
  description: z.string().optional(),
  dueDate: z.date().optional(),
  category: z.string().optional(),
  priority: z.enum(["low", "medium", "high"]),
  pomodoro: z.number().min(1, "At least 1 pomodoro required"),
});

export type AddTaskFormValues = z.infer<typeof addTaskSchema>;
