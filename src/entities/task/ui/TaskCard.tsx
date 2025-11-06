import type { TaskCardProps } from "../model/types";
import { Checkbox } from "@/shared/ui/checkbox";
import React from "react";
import Linkify from "linkify-react";
import { useTaskDrawerStore } from "../model/useTaskDrawerStore";

export const TaskCard = React.memo(({ task, actions }: TaskCardProps) => {
  const openDrawer = useTaskDrawerStore((state) => state.openDrawer);

  return (
    <div
      className="group  relative bg-bg-secondary border border-bg-tertiary rounded-xl p-5 hover:border-accent/50 transition-all duration-200 cursor-pointer text-sm  lg:w-[360px] 2xl:w-[400px]  h-50 flex flex-col "
      onClick={() => openDrawer(task, "view")}
    >
      <div className="flex items-start gap-3 mb-3 lg:w-30">
        <Checkbox
          className="mt-0.5 size-5 shrink-0"
          onClick={(e) => e.stopPropagation()}
        />
        <h3 className="font-semibold text-text-primary text-base leading-tight flex-1 line-clamp-1">
          {task.title}
        </h3>
      </div>

      <div className="text-text-secondary text-sm leading-relaxed line-clamp-3 mb-auto ml-8">
        <Linkify>{task.description}</Linkify>
      </div>

      <div className="flex items-center justify-between ml-8 mt-3">
        <div className="inline-flex items-center gap-2 bg-bg-tertiary px-3 py-1.5 rounded-lg text-xs text-text-secondary">
          {task.dueDate ? new Date(task.dueDate).toLocaleDateString() : ""}
        </div>

        <div
          className="flex items-center gap-1  xl:opacity-0group-hover:opacity-100 transition-opacity"
          onClick={(e) => e.stopPropagation()}
        >
          {actions}
        </div>
      </div>
    </div>
  );
});
