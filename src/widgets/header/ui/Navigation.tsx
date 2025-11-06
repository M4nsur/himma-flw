import { NavLink } from "react-router";
import { navigationLinks } from "../model/constants";

export const Navigation = () => {
  return (
    <nav className="hidden lg:block">
      <ul className="flex justify-center gap-8">
        {navigationLinks.map(({ to, label, end }) => (
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
  );
};
