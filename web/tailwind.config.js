/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        surface: {
          DEFAULT: "#121212",
          panel: "#1E1E1E",
          border: "#2C2C2C",
        },
        content: {
          primary: "#E0E0E0",
          secondary: "#A0A0A0",
          error: "#FF5C5C",
        },
        accent: {
          DEFAULT: "#50728A",
          hover: "#5F8EA8",
          light: "#8DB6CC",
          muted: "#395768",
        },
      },
      fontFamily: {
        sans: ["Inter", "Arial", "sans-serif"],
        mono: ["JetBrains Mono", "Roboto Mono", "monospace"],
      },
    },
  },
  plugins: [],
};
