import type { UseFormProps } from "react-hook-form";
import type { AddTaskFormValues } from "../model/schema";

interface TaskInfoProps {
  taskValues: AddTaskFormValues;
}

export const TaskInfo = ({
  title,
  description,
  priority,
  dueDate,
  category,
  pomodoro,
}: AddTaskFormValues) => {
  return <div>
    
  </div>;
};
