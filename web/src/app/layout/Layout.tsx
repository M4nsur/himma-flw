import { Header } from "@/widgets/header/index";
import { Outlet } from "react-router";

export const Layout = () => {
  return (
    <div className="flex h-screen">
      <div className="flex flex-col flex-1">
        <Header />

        <main className="flex-1 p-6 md:p-8 overflow-auto">
          <Outlet />
        </main>
      </div>
    </div>
  );
};
