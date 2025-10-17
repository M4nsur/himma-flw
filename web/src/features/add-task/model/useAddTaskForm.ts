import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { addTaskSchema } from "./schema";
import type { TaskFormProps } from "@/entities/task";

export const useAddTaskFeature = () => {
  const form = useForm<TaskFormProps>({
    resolver: zodResolver(addTaskSchema),
    defaultValues: {
      category: "None",
      priority: "medium",
    },
  });

  const onSubmit = form.handleSubmit((data) => {
    console.log(data);
  });

  return {
    form,
    onSubmit,
  };
};
