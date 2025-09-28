import { ROUTES } from "@/shared/routes/routes";
import { createBrowserRouter } from "react-router";

import { lazy } from "react";
import { Layout } from "@/app/layout/Layout";

const DashboardPage = lazy(() => import("@/pages/dashboard"));
const TasksPage = lazy(() => import("@/pages/tasks"));
const HabitsPage = lazy(() => import("@/pages/habits"));
const PomodoroPage = lazy(() => import("@/pages/pomodoro"));
const CommunitiesPage = lazy(() => import("@/pages/communities"));
const StatisticsPage = lazy(() => import("@/pages/statistics"));
const ProfilePage = lazy(() => import("@/pages/profile"));

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Layout,
    children: [
      { index: true, Component: DashboardPage },
      { path: ROUTES.tasks, Component: TasksPage },
      { path: ROUTES.habits, Component: HabitsPage },
      { path: ROUTES.pomodoro, Component: PomodoroPage },
      { path: ROUTES.communities, Component: CommunitiesPage },
      { path: ROUTES.statistics, Component: StatisticsPage },
      { path: ROUTES.profile, Component: ProfilePage },
    ],
  },
]);
