import { Suspense } from "react";

import { router } from "@/app/routes";
import { RouterProvider } from "react-router";

export const AppRouter = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <RouterProvider router={router} />
  </Suspense>
);
