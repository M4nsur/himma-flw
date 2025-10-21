import { AppRouter } from "@/app/routes/";
import { ThemeProvider } from "@/app/providers/theme";

function App() {
  return (
    <ThemeProvider>
      <AppRouter />
    </ThemeProvider>
  );
}

export default App;
