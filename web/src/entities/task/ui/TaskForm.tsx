import { FormField } from "@/shared/ui/form-field";
import { Input } from "@/shared/ui/input";
import { Controller, type UseFormReturn } from "react-hook-form";
import { DropdownRadio } from "@/shared/ui/dropdown/dropdown-radio";
import { PRIORITY_OPTIONS } from "../model/constants";
import { Textarea } from "@/shared/ui/textarea";
import { DataPicker } from "@/shared/ui/data-picker";
import { Button } from "@/shared/ui/button";
import type {AddTaskFormValues} from '../model/schema';

interface TaskFormProps {
  form: UseFormReturn<AddTaskFormValues>;
  onSubmit: (values: AddTaskFormValues) => void;
  submitLabel?: string;
}

export const TaskForm = ({
  form,
  onSubmit,
  submitLabel = "Save",
}: TaskFormProps) => {
  const {
    register,
    control,
    formState: { errors },
  } = form;

  return (
    <form
      onSubmit={form.handleSubmit(onSubmit)}
      className="flex flex-col justify-center gap-4 text-[16px]"
    >
      <FormField label="Task title" error={errors.title?.message}>
        <Input placeholder="Enter task name" {...register("title")} />
      </FormField>

      <FormField label="Description">
        <Textarea
          placeholder="Enter description"
          {...register("description")}
        />
      </FormField>

      <FormField label="Category" error={errors.category?.message}>
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

      <Button className="bg-bg-secondary">{submitLabel}</Button>
    </form>
  );
};
