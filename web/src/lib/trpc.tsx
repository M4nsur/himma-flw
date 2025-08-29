import { createTRPCReact, httpBatchLink } from "@trpc/react-query";
import type { TrpcRouter } from "@himma-flw/backend/src/trpc";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

export const Trpc = createTRPCReact<TrpcRouter>();

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false,
      refetchOnWindowFocus: false,
    },
  },
});

const trpcClient = Trpc.createClient({
  links: [
    httpBatchLink({
      url: "http://localhost:4000/trpc",
    }),
  ],
});

export const TrpcProvider = ({ children }: { children: React.ReactNode }) => {
  return (
    <Trpc.Provider client={trpcClient} queryClient={queryClient}>
      <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
    </Trpc.Provider>
  );
};
