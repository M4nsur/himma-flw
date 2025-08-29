import express from "express";
import * as trpcExpress from "@trpc/server/adapters/express";
import { trpcRouter } from "./trpc";
import cors from "cors";

const expressApp = express();
expressApp.use(cors());
expressApp.get("/", (req, res) => {
  res.send("its work");
});

expressApp.use(
  "/trpc",
  trpcExpress.createExpressMiddleware({
    router: trpcRouter,
  })
);

expressApp.listen(4000, () => {
  console.log("server started at http://localhost:4000");
});
