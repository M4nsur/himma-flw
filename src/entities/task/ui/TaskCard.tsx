import type { TaskCardProps } from "../model/types";
import { Checkbox } from "@/shared/ui/checkbox";
import React from "react";
import Linkify from "linkify-react";
import { useTaskDrawerStore } from "../model/useTaskDrawerStore";

export const TaskCard = React.memo(({ task, actions }: TaskCardProps) => {
  const openDrawer = useTaskDrawerStore((state) => state.openDrawer);

  return (
    <div
      className="group relative bg-bg-secondary border border-bg-tertiary rounded-xl p-5 hover:border-accent/50 transition-all duration-200 cursor-pointer w-full max-w-md h-50 flex flex-col"
      onClick={() => openDrawer(task, "view")}
    >
      {/* Header с checkbox */}
      <div className="flex items-start gap-3 mb-3">
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

      {/* Footer */}
      <div className="flex items-center justify-between ml-8 mt-3">
        <div className="inline-flex items-center gap-2 bg-bg-tertiary px-3 py-1.5 rounded-lg text-xs text-text-secondary">
          <svg
            className="w-3.5 h-3.5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
            />
          </svg>
          {task.dueDate}
        </div>

        {/* Actions */}
        <div
          className="flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity"
          onClick={(e) => e.stopPropagation()}
        >
          {actions}
        </div>
      </div>
    </div>
  );
});
