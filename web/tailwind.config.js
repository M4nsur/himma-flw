module.exports = {
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        background: {
          DEFAULT: "#121212",
          panel: "#1E1E1E",
          border: "#2C2C2C",
        },
        text: {
          primary: "#E0E0E0",
          secondary: "#A0A0A0",
          error: "#FF5C5C",
        },
        accent: {
          DEFAULT: "#50728A",
          hover: "#5F8EA8",
          light: "#8DB6CC",
          contributionFill: "#395768",
        },
      },
      fontFamily: {
        sans: ["Inter", "Arial", "sans-serif"],
        mono: ["JetBrains Mono", "Roboto Mono", "monospace"],
      },
      borderRadius: {
        DEFAULT: "8px",
      },
      boxShadow: {
        soft: "0 2px 8px rgba(0, 0, 0, 0.5)",
      },
    },
  },
  variants: {
    extend: {
      backgroundColor: ["dark", "hover", "focus"],
      textColor: ["dark", "hover", "focus"],
      boxShadow: ["dark", "hover", "focus"],
    },
  },
  plugins: [],
};
