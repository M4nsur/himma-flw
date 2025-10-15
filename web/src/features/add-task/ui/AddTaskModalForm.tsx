import { FormField } from "@/shared/ui/form-field";
import { Input } from "@/shared/ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import { addTaskSchema, type AddTaskFormValues } from "../model/schema";
import { Controller, useForm, type SubmitHandler } from "react-hook-form";
import { DropdownRadio } from "@/shared/ui/dropdown/dropdown-radio";
import { PRIORITY_OPTIONS } from "@/entities/tasks";
import { Textarea } from "@/shared/ui/textarea";
import { DataPicker } from "@/shared/ui/data-picker";
import { Button } from "@/shared/ui/button";
export const AddTaskModalForm = () => {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<AddTaskFormValues>({
    resolver: zodResolver(addTaskSchema),
    defaultValues: {
      category: "None",
      priority: "medium",
    },
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
      <FormField label="Description">
        <Textarea placeholder="Enter task name" {...register("description")} />
      </FormField>
      <FormField label="Category" error={errors.priority?.message}>
        <DropdownRadio
          name="category"
          control={control}
          options={[{ label: "test", value: "tests" }]}
          className="w-full"
        />
      </FormField>
      <FormField label="Priority" error={errors.priority?.message}>
        <DropdownRadio
          name="priority"
          control={control}
          options={PRIORITY_OPTIONS}
          className="w-full"
        />
      </FormField>

      <FormField label="Due Date">
        <Controller
          name="dueDate"
          control={control}
          render={({ field }) => (
            <DataPicker value={field.value} onChange={field.onChange} />
          )}
        />
      </FormField>
      <Button className="bg-bg-secondary">Create</Button>
    </form>
  );
};
