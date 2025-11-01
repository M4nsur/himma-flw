import type { Task, TaskDTO, TaskFormTypes } from "../model/types";

export const taskDtoToTask = (dto: TaskDTO): Task => ({
  ...dto,
  dueDate: dto.dueDate ? new Date(dto.dueDate) : undefined,
  createdAt: new Date(dto.createdAt),
  completedAt: dto.completedAt ? new Date(dto.completedAt) : undefined,
});

export const taskToTaskDto = (task: Partial<Task>): Partial<TaskDTO> => ({
  ...task,
  dueDate: task.dueDate?.toISOString().split("T")[0],
  createdAt: task.createdAt?.toISOString(),
  completedAt: task.completedAt?.toISOString(),
});

export const taskFormToTaskDto = (
  form: TaskFormTypes
): Omit<TaskDTO, "id" | "createdAt"> => ({
  title: form.title,
  description: form.description,
  category: form.category,
  priority: form.priority,
  status: form.status,
  pomodoro: form.pomodoro,
  dueDate: form.dueDate?.toISOString().split("T")[0],
});

export const taskDtosToTasks = (dtos: TaskDTO[]): Task[] =>
  dtos.map(taskDtoToTask);
