import { z } from "zod";

export const taskDTOSchema = z.object({
  id: z.string(),
  title: z.string(),
  description: z.string().optional(),
  dueDate: z.string().optional(),
  category: z.string().optional(),
  priority: z.enum(["low", "medium", "high"]),
  pomodoro: z.number(),
  status: z.enum(["pending", "in_progress", "completed", "cancelled"]),
  createdAt: z.string(),
  updatedAt: z.string(),
});

export type TaskDTO = z.infer<typeof taskDTOSchema>;

export const createTaskDTOSchema = taskDTOSchema.omit({
  id: true,
  status: true,
  createdAt: true,
  updatedAt: true,
});

export type CreateTaskDTO = z.infer<typeof createTaskDTOSchema>;

export const updateTaskDTOSchema = taskDTOSchema
  .partial()
  .required({ id: true });
export type UpdateTaskDTO = z.infer<typeof updateTaskDTOSchema>;
