import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        display: ["var(--font-cormorant)", "Georgia", "serif"],
        sans: ["var(--font-dm-sans)", "system-ui", "sans-serif"],
        mono: ["var(--font-jetbrains-mono)", "ui-monospace", "monospace"],
      },
      colors: {
        brand: {
          blue: "var(--color-brand-blue)",
          dark: "var(--color-brand-dark)",
          navy: "var(--color-brand-navy)",
          gold: "var(--color-brand-gold)",
          "gold-light": "var(--color-brand-gold-light)",
          white: "var(--color-brand-white)",
          muted: "var(--color-brand-muted)",
        },
        glass: {
          border: "var(--color-glass-border)",
          bg: "var(--color-glass-bg)",
        },
      },
      borderRadius: {
        lg: "var(--radius-lg)",
        md: "var(--radius-md)",
        sm: "var(--radius-sm)",
      },
    },
  },
  plugins: [],
};

export default config;
