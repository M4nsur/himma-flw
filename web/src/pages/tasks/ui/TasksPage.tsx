import { Trpc } from "@/shared/lib/";
import { PageHeader } from "@/shared/ui/page-header";
import { AddTaskAction } from "@/features/add-task";
import { TaskList } from "@/widgets/task-list";
export const TasksPage = () => {
  const { data, isLoading, error } = Trpc.getTodos.useQuery();

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <div>
      <PageHeader title="Tasks" action={<AddTaskAction />}></PageHeader>
      <div className="flex flex-col">
        <TaskList variant="active" tasks={data} />
        <TaskList variant="completed" title="Completed tasks" tasks={data} />
      </div>
    </div>
  );
};
