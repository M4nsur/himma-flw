import { PageHeader } from "@/shared/ui/page-header";
import { AddTaskAction } from "@/features/add-task";
import { TaskList } from "@/widgets/task-list";
import { tasks } from "@/shared/values";
import type { TaskCardType } from "@/entities/task/model/types";
import { useCallback, useState } from "react";

type DrawerState = {
  isOpen: boolean;
  task: TaskCardType | null;
  mode: "view" | "edit";
};

export const TasksPage = () => {
  const [drawerState, setDrawerState] = useState<DrawerState>({
    isOpen: false,
    task: null,
    mode: "view",
  });

  const handleOpenTaskClick = useCallback(
    (task: TaskCardType) => {
      setDrawerState(() => ({
        isOpen: true,
        task,
        mode: "view",
      }));
      console.log(drawerState);
    },
    [drawerState]
  );

  const handleEditTaskClick = useCallback(
    (task: TaskCardType) => {
      setDrawerState(() => ({
        isOpen: true,
        task,
        mode: "edit",
      }));
      console.log(drawerState);
    },
    [drawerState]
  );

  const handleTaskDelete = useCallback(
    (id: number) => {
      console.log(`deleted task ${id}`);
    },
    []
  );

  return (
    <div>
      <PageHeader title="Tasks" action={<AddTaskAction />}></PageHeader>
      <div className="flex flex-col">
        <TaskList
          onOpen={handleOpenTaskClick}
          onEdit={handleEditTaskClick}
          onDelete={handleTaskDelete}
          tasks={tasks}
        />
        <TaskList
          onOpen={handleOpenTaskClick}
          onEdit={handleEditTaskClick}
          onDelete={handleTaskDelete}
          variant="completed"
          title="Completed tasks"
          tasks={tasks}
        />
      </div>
    </div>
  );
};
