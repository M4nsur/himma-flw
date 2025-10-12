import { TrpcProvider } from "@/app/providers/trpc";
import { AppRouter } from "@/app/routes/";
import { ThemeProvider } from "@/app/providers/theme";

function App() {
  return (
    <ThemeProvider>
      <TrpcProvider>
        <AppRouter />
      </TrpcProvider>
    </ThemeProvider>
  );
}

export default App;
