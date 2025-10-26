import { PageHeader } from "@/shared/ui/page-header";
import { AddTaskAction } from "@/features/task/addTask";
import { TaskList } from "@/widgets/task-list";
import { tasks } from "@/shared/values";

import { TaskDrawer } from "@/widgets/task-drawer";

export const TasksPage = () => {
  return (
    <div>
      <PageHeader title="Tasks" action={<AddTaskAction />}></PageHeader>
      <div className="flex flex-col">
        <TaskList tasks={tasks} />
        <TaskList variant="completed" tasks={tasks} />
      </div>
      <TaskDrawer />
    </div>
  );
};
