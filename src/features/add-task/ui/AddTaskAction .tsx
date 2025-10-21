import { useState } from "react";
import { Button } from "@/shared/ui/button";
import { BaseModal } from "@/shared/ui/modal";
import { TaskForm } from "@/entities/task";
import { useAddTaskFeature } from "../model/useAddTaskForm";

export const AddTaskAction = () => {
  const [open, setOpen] = useState(false);

  const { form, onSubmit } = useAddTaskFeature(() => setOpen(false));

  return (
    <>
      <Button onClick={() => setOpen(true)} className="bg-bg-tertiary">
        Add task
      </Button>

      <BaseModal open={open} onOpenChange={setOpen} title="Add New Task">
        <TaskForm form={form} onSubmit={onSubmit} submitLabel="Create" />
      </BaseModal>
    </>
  );
};
