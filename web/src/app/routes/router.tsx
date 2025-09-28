import { createBrowserRouter } from "react-router";

import { Layout } from "../layout/Layout";
import { DashboardPage } from "@/pages/dashboard";
import { TasksPage } from "@/pages/tasks";
import { PomodoroPage } from "@/pages/pomodoro";
import { CommunitiesPage } from "@/pages/communities";
import { StatisticsPage } from "@/pages/statistics";
import { ProfilePage } from "@/pages/profile";
import { HabitsPage } from "@/pages/habits";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Layout,
    children: [
      { index: true, Component: DashboardPage },
      { path: "tasks", Component: TasksPage },
      { path: "habits", Component: HabitsPage },
      { path: "pomodoro", Component: PomodoroPage },
      { path: "communities", Component: CommunitiesPage },
      { path: "statistics", Component: StatisticsPage },
      { path: "profile", Component: ProfilePage },
    ],
  },
]);
