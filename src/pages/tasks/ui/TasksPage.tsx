import { PageHeader } from "@/shared/ui/page-header";
import { AddTaskAction } from "@/features/add-task";
import { TaskList } from "@/widgets/task-list";
import { tasks } from "@/shared/values";
export const TasksPage = () => {
  return (
    <div>
      <PageHeader title="Tasks" action={<AddTaskAction />}></PageHeader>
      <div className="flex flex-col">
        <TaskList variant="active" tasks={tasks} />
        <TaskList variant="completed" title="Completed tasks" tasks={tasks} />
      </div>
    </div>
  );
};
