import { Link } from "react-router";
import { ROUTES } from "@/shared/routes/routes";
export const Nav = () => {
  return (
    <div className="flex flex-col gap-2 px-4">
      <Link to={ROUTES.dashboard}>DashboardPage</Link>
      <Link to={ROUTES.tasks}>Tasks</Link>
      <Link to={ROUTES.habits}>Habits</Link>
      <Link to={ROUTES.pomodoro}>Pomodoro</Link>
      <Link to={ROUTES.communities}>Communities</Link>
      <Link to={ROUTES.statistics}>Statistics</Link>
      <Link to={ROUTES.profile}>Profile</Link>
    </div>
  );
};
