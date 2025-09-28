/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class", // включаем поддержку тем через класс .dark
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        dark: {
          bg: "#0f172a",
          card: "#1e293b",
          border: "#334155",
          text: "#e2e8f0",
          subtext: "#94a3b8",
          accent: "#3b82f6",
          accent2: "#8b5cf6",
          heatmap: "#a78bfa",
          success: "#22c55e",
          warning: "#f59e0b",
          danger: "#ef4444",
        },

        light: {
          bg: "#ffffff",
          card: "#f9fafb",
          border: "#e5e7eb",
          text: "#1e293b",
          subtext: "#6b7280",
          accent: "#2563eb",
          accent2: "#7c3aed",
          heatmap: "#a78bfa",
          success: "#16a34a",
          warning: "#f59e0b",
          danger: "#dc2626",
        },
      },
    },
  },
  plugins: [],
};
