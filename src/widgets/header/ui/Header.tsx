import { NavLink } from "react-router";
import { ROUTES } from "@/shared/routes";

export const Header = () => {
  const links = [
    { to: ROUTES.dashboard, label: "Dashboard", end: true },
    { to: ROUTES.tasks, label: "Tasks" },
    { to: ROUTES.habits, label: "Habits" },
    { to: ROUTES.pomodoro, label: "Pomodoro" },
    { to: ROUTES.communities, label: "Communities" },
    { to: ROUTES.statistics, label: "Statistics" },
    { to: ROUTES.profile, label: "Profile" },
  ];

  return (
    <header className="top-0 z-50 sticky bg-bg-primary">
      <nav className="mx-auto py-4">
        <ul className="flex justify-center gap-8">
          {links.map(({ to, label, end }) => (
            <li key={to}>
              <NavLink
                to={to}
                end={end}
                prefetch="intent"
                className={({ isActive }) =>
                  isActive
                    ? "text-text-secondary font-semibold transition-colors duration-200 p-3"
                    : "text-text-primary p-3"
                }
              >
                {label}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};
