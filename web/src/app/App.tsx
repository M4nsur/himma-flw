import { TrpcProvider } from "@/app/providers/trpc";
import { AppRouter } from "@/app/routes/";

function App() {
  return (
    <TrpcProvider>
      <AppRouter />
    </TrpcProvider>
  );
}

export default App;
