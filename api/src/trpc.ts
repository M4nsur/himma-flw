import { initTRPC } from "@trpc/server";
import { tasks } from "../testValue.js";

const trpc = initTRPC.create();

export const trpcRouter = trpc.router({
  getTodos: trpc.procedure.query(() => {
    return tasks;
  }),
});

export type TrpcRouter = typeof trpcRouter;
