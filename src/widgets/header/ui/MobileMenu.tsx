import { NavLink } from "react-router";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { navigationLinks } from "../model/constants";
import { cn } from "@/shared/lib/classnames";

export const MobileMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="lg:hidden px-3">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={cn(
          "p-2 text-text-primary top-4 z-50 bg-bg-primary",
          isOpen && "fixed"
        )}
        aria-label="Toggle menu"
      >
        {isOpen ? <X size={30} /> : <Menu size={30} />}
      </button>

      {isOpen && (
        <nav className="fixed inset-0  z-40 pt-16 px-2">
          <ul className="flex flex-col py-4">
            {navigationLinks.map(({ to, label, end }) => (
              <li key={to}>
                <NavLink
                  to={to}
                  end={end}
                  prefetch="intent"
                  onClick={() => setIsOpen(false)}
                  className={({ isActive }) =>
                    isActive
                      ? "text-text-secondary font-semibold transition-colors duration-200 p-4 block text-lg"
                      : "text-text-primary p-4 block text-lg hover:bg-bg-secondary"
                  }
                >
                  {label}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </div>
  );
};
