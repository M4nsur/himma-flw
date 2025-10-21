import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { addTaskSchema, type AddTaskFormValues } from "@/entities/task";

export const useAddTaskFeature = (onSuccess?: () => void) => {
  const form = useForm<AddTaskFormValues>({
    resolver: zodResolver(addTaskSchema),
    defaultValues: {
      category: "None",
      priority: "medium",
    },
  });

  const handleSubmit = (data: AddTaskFormValues) => {
    console.log(data);
    onSuccess?.();
    form.reset();
  };

  return {
    form,
    onSubmit: handleSubmit,
  };
};
