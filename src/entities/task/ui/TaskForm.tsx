import { FormField } from "@/shared/ui/form-field";
import { Input } from "@/shared/ui/input";
import { Controller, type UseFormReturn } from "react-hook-form";
import { DropdownRadio } from "@/shared/ui/dropdown/dropdown-radio";
import { PRIORITY_OPTIONS } from "../model/constants";
import { Textarea } from "@/shared/ui/textarea";
import { DataPicker } from "@/shared/ui/data-picker";
import { Button } from "@/shared/ui/button";
import type { AddTaskFormValues } from "../model/schema";

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
      className="flex flex-col gap-5"
    >
      {/* Task Title */}
      <FormField label="Task title" error={errors.title?.message}>
        <Input
          placeholder="Enter task name"
          {...register("title")}
          className="bg-bg-tertiary border-bg-tertiary text-text-primary placeholder:text-text-secondary focus:border-accent/50 focus:ring-1 focus:ring-accent/30 transition-all"
        />
      </FormField>

      {/* Description */}
      <FormField label="Description">
        <Textarea
          placeholder="Add a description..."
          {...register("description")}
          className="bg-bg-tertiary border-bg-tertiary text-text-primary placeholder:text-text-secondary focus:border-accent/50 focus:ring-1 focus:ring-accent/30 transition-all min-h-[100px] resize-none"
        />
      </FormField>

      {/* Grid для Category и Priority */}
      <div className="grid grid-cols-2 gap-4">
        <FormField label="Category" error={errors.category?.message}>
          <DropdownRadio
            name="category"
            control={control}
            options={[{ label: "test", value: "tests" }]}
            className="w-full bg-bg-tertiary border-bg-tertiary hover:bg-bg-button-hover transition-colors"
          />
        </FormField>

        <FormField label="Priority" error={errors.priority?.message}>
          <DropdownRadio
            name="priority"
            control={control}
            options={PRIORITY_OPTIONS}
            className="w-full bg-bg-tertiary border-bg-tertiary hover:bg-bg-button-hover transition-colors"
          />
        </FormField>
      </div>

      {/* Due Date */}
      <FormField label="Due Date">
        <Controller
          name="dueDate"
          control={control}
          render={({ field }) => (
            <DataPicker value={field.value} onChange={field.onChange} />
          )}
        />
      </FormField>

      {/* Submit Button */}
      <Button
        type="submit"
        className="bg-accent hover:bg-accent-hover text-text-primary font-medium py-2.5 mt-2 transition-all duration-200 hover:shadow-lg"
      >
        {submitLabel}
      </Button>
    </form>
  );
};
