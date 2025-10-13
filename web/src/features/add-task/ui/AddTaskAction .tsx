import { BaseModal } from "@/shared/ui/modal";
import { AddTaskModalForm } from "./AddTaskModalForm";
import { useState } from "react";

import { Button } from "@/shared/ui/button";

export const AddTaskAction  = () => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <Button
        className="bg-bg-tertiary"
        onClick={() => setOpen(true)}
        title="Add task"
      >
        Add task
      </Button>
      <BaseModal open={open} onOpenChange={setOpen} title="Add New Task">
        <AddTaskModalForm />
      </BaseModal>
    </>
  );
};
