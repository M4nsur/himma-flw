import { Trpc } from "@/lib/trpc";

export const AllTasks = () => {
  const { data, isLoading, error } = Trpc.getTodos.useQuery();

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  console.log(data, "ss");
  return (
    <div className="bg-amber-300">
      <h2>Todos</h2>
      <pre>{JSON.stringify(data, null, 2)}</pre>
      <ul>
        {data?.map((t: { id: number; title: string }) => (
          <li key={t.id}>{t.title}</li>
        ))}
      </ul>
    </div>
  );
};
