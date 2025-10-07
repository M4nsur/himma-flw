import { Link } from "react-router";
import { ROUTES } from "@/shared/routes";

export const Header = () => {
  return (
    <div className="flex justify-center gap-8 bg-surface-panel mx-auto py-4 text-red-500">
      <Link
        to={ROUTES.dashboard}
        className="text-text-primary hover:text-accent-primary"
      >
        DashboardPage
      </Link>
      <Link
        to={ROUTES.tasks}
        className="text-text-primary hover:text-accent-primary"
      >
        Tasks
      </Link>
      <Link
        to={ROUTES.habits}
        className="text-text-primary hover:text-accent-primary"
      >
        Habits
      </Link>
      <Link
        to={ROUTES.pomodoro}
        className="text-text-primary hover:text-accent-primary"
      >
        Pomodoro
      </Link>
      <Link
        to={ROUTES.communities}
        className="text-text-primary hover:text-accent-primary"
      >
        Communities
      </Link>
      <Link
        to={ROUTES.statistics}
        className="text-text-primary hover:text-accent-primary"
      >
        Statistics
      </Link>
      <Link
        to={ROUTES.profile}
        className="text-text-primary hover:text-accent-primary"
      >
        Profile
      </Link>
    </div>
  );
};
