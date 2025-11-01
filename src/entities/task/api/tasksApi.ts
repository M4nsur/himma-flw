import { taskDtosToTasks } from "../lib/mappers";
import { mockTaskDtos } from "../model/mockData";

export const fetchTasks = () => {
  return taskDtosToTasks(mockTaskDtos);
};
