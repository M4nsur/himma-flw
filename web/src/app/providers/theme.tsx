import { useEffect, useState } from "react";
import type { ReactNode } from "react";

type Theme = "light" | "dark";

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
  const [theme, setTheme] = useState<Theme>("dark");

  useEffect(() => {
    document.documentElement.classList.remove("light", "dark");
    document.documentElement.classList.add(theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <div>
      {children}
      <button
        onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
        className="right-4 bottom-4 fixed bg-dark-accent dark:bg-light-accent px-3 py-2 rounded text-dark-text dark:text-light-text"
      >
        Toggle theme
      </button>
    </div>
  );
};
