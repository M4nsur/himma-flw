import { Trpc } from "@/shared/lib/trpc";
import { Button } from "@/shared/ui/button";
import { PageHeader } from "@/shared/ui/page-header";
export const TasksPage = () => {
  const { data, isLoading, error } = Trpc.getTodos.useQuery();

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  console.log(data, "ss");
  return (
    <div className="bg-bg-panel">
      <PageHeader
        title="Tasks"
        action={
          <Button className="" onClick={() => console.log("hello")}>
            Add task
          </Button>
        }
      ></PageHeader>

      <pre>{JSON.stringify(data, null, 2)}</pre>
      <ul>
        {data?.map((t: { id: number; title: string }) => (
          <li key={t.id}>{t.title}</li>
        ))}
      </ul>
    </div>
  );
};
