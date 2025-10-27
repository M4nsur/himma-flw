import { PageHeader } from "@/shared/ui/page-header";
import { AddTaskAction } from "@/features/task/taskAdd";
import { TaskList } from "@/widgets/taskList";
import { tasks } from "@/shared/values";

import { TaskDrawer } from "@/widgets/taskDrawer";

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
