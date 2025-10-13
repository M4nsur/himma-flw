import { z } from "zod";

export const addTaskSchema = z.object({
  title: z.string().min(3),
  description: z.string().optional(),
  dueDate: z.date().optional(),
  tags: z.array(z.string()),
  priority: z.enum(["low", "medium", "high"]),
});

export type AddTaskFormValues = z.infer<typeof addTaskSchema>;
