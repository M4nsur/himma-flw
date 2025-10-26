import { useTaskDrawerStore } from "@/shared/lib";
import type { TaskCardProps } from "../model/types";
import { Checkbox } from "@/shared/ui/checkbox";
import React from "react";

export const TaskCard = React.memo(({ task, actions }: TaskCardProps) => {
  console.log("rendred card");

  const openDrawer = useTaskDrawerStore((state) => state.openDrawer);

  return (
    <div
      onClick={() => openDrawer(task, "view")}
      className="flex justify-between items-center gap-1 bg-bg-primary p-4 rounded-2xl w-[500px] h-[220px] cursor-pointer"
    >
      <div className="flex gap-4">
        <Checkbox className="mt-1 size-5" />
        <div>
          <div className="mb-[8px] font-bold">{task.title}</div>
          <div className="flex flex-col gap-2 text-text-secondary">
            <div className="line-clamp-4">{task.description}</div>
            <div className="bg-bg-secondary px-[8px] py-[6px] rounded-xl w-fit text-[14px] text-center">
              Deadline:{task.dueDate}
            </div>
          </div>
        </div>
      </div>
      <div
        className="flex justify-between gap-2"
        onClick={(e) => e.stopPropagation()}
      >
        {actions}
      </div>
    </div>
  );
});
