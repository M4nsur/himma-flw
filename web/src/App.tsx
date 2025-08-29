import { TrpcProvider } from "@/lib/trpc";
import { AllTasks } from "@/pages/AllTasks";

function App() {
  return (
    <TrpcProvider>
      <AllTasks />
    </TrpcProvider>
  );
}

export default App;
