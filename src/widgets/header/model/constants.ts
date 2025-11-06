import { ROUTES } from "@/shared/routes";

export const navigationLinks = [
  { to: ROUTES.dashboard, label: "Dashboard", end: true },
  { to: ROUTES.tasks, label: "Tasks" },
  { to: ROUTES.habits, label: "Habits" },
  { to: ROUTES.pomodoro, label: "Pomodoro" },
  { to: ROUTES.communities, label: "Communities" },
  { to: ROUTES.statistics, label: "Statistics" },
  { to: ROUTES.profile, label: "Profile" },
];
