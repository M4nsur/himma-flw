import { Header } from "@/widgets/header/index";
import { Outlet } from "react-router";

export const Layout = () => {
  return (
    <div className="flex h-screen">
      <div className="flex flex-col flex-1 w-full">
        <Header />

        <main className="flex-1 bg-bg-secondary px-2 sm:p-3 md:p-4">
          <Outlet />
        </main>
      </div>
    </div>
  );
};
