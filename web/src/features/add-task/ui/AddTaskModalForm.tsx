import { FormField } from "@/shared/ui/form-field";
import { Input } from "@/shared/ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import { addTaskSchema, type AddTaskFormValues } from "../model/schema";
import { useForm, type SubmitHandler } from "react-hook-form";
import { DropdownRadio } from "@/shared/ui/dropdown/dropdown-radio";
import { PRIORITY_OPTIONS } from "@/entities/tasks";
export const AddTaskModalForm = () => {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<AddTaskFormValues>({
    resolver: zodResolver(addTaskSchema),
  });

  const onSubmit: SubmitHandler<AddTaskFormValues> = (data) =>
    console.log(data);
  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col justify-center gap-4 text-[16px]"
    >
      <FormField label="Task title" error={errors.title?.message}>
        <Input placeholder="Enter task name" {...register("title")} />
      </FormField>

      <FormField
        label="Priority"
        error={errors.priority?.message}
        htmlFor="priority"
      >
        <DropdownRadio
          name="priority"
          control={control}
          options={PRIORITY_OPTIONS}
          className="w-full"
        />
      </FormField>
    </form>
  );
};
