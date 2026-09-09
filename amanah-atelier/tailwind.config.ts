import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: "#161310",
        ivory: "#F6F1E7",
        "warm-white": "#FBF9F4",
        walnut: "#5A4130",
        "walnut-deep": "#3C2A1D",
        tan: "#B99A78",
        "tan-faint": "#E7DCC9",
        line: "rgba(22,19,16,0.14)",
      },
      fontFamily: {
        serif: ["var(--font-fraunces)", "Georgia", "serif"],
        sans: ["var(--font-work-sans)", "Helvetica", "Arial", "sans-serif"],
      },
      maxWidth: {
        site: "1320px",
      },
      letterSpacing: {
        label: "0.14em",
      },
    },
  },
  plugins: [],
};

export default config;
