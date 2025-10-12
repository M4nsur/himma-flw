"use client";

import { useState } from "react";
import { Button } from "@/shared/ui/button";
import { BaseModal } from "@/shared/ui/modal";

export const AddModalButton = () => {
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
        this work
      </BaseModal>
    </>
  );
};
