import { TrpcProvider } from "@/app/providers/trpc";
import { AllTasks } from "@/pages/AllTasks/ui/AllTasksPage";
import "@mantine/core/styles.css";
import { MantineProvider } from "@mantine/core";
function App() {
  return (
    <MantineProvider>
      <TrpcProvider>
        <AllTasks />;
      </TrpcProvider>
    </MantineProvider>
  );
}

export default App;
