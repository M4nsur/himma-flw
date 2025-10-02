import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient, Trpc, trpcClient } from "@/shared/lib/trpc";

export const TrpcProvider = ({ children }: { children: React.ReactNode }) => {
  return (
    <Trpc.Provider client={trpcClient} queryClient={queryClient}>
      <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
    </Trpc.Provider>
  );
};
