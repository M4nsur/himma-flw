import { TrpcProvider } from "@/app/providers/trpc";
import { AllTasks } from "@/pages/";

function App() {
  return (
      <TrpcProvider>
        <AllTasks />;
      </TrpcProvider>
  );
}

export default App;
