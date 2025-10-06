import type { Config } from "tailwindcss";
import plugin from "tailwindcss/plugin";

const config: Config = {
  darkMode: "class",
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
    "./content/**/*.{md,mdx}"
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        display: ["var(--font-heading)", "Inter", "sans-serif"]
      },
      colors: {
        brand: {
          50: "#f3f6ff",
          100: "#dbe4ff",
          200: "#b3c7ff",
          300: "#8aa9ff",
          400: "#628cff",
          500: "#3a6fff",
          600: "#2856db",
          700: "#1d40a8",
          800: "#122a75",
          900: "#081442"
        }
      },
      boxShadow: {
        soft: "0 20px 60px -25px rgba(15, 23, 42, 0.45)",
        glow: "0 0 0 1px rgba(99, 102, 241, 0.12)"
      },
    }
  },
  plugins: [
    plugin(({ addVariant }) => {
      addVariant("supports-backdrop", "@supports (backdrop-filter: blur(0)) &");
    })
  ]
};

export default config;
