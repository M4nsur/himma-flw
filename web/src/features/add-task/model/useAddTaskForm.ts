import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { addTaskSchema, type AddTaskFormValues } from "./schema";

export const useAddTaskForm = (onSuccess?: () => void) => {
  const form = useForm<AddTaskFormValues>({
    resolver: zodResolver(addTaskSchema),
    defaultValues: {
      category: "None",
      priority: "medium",
    },
  });

  const onSubmit = form.handleSubmit((data) => {
    console.log(data);
    onSuccess?.();
  });

  return {
    form,
    onSubmit,
  };
};
