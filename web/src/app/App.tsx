import { TrpcProvider } from "@/app/providers/trpc";
import { AllTasks } from "@/pages/AllTasks/ui/AllTasksPage";

function App() {
  return (
    <TrpcProvider>
      <AllTasks />
    </TrpcProvider>
  );
}

export default App;
