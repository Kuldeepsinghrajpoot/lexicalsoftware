import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        base: "rgb(var(--color-base) / <alpha-value>)",
        panel: "rgb(var(--color-panel) / <alpha-value>)",
        "panel-border": "rgb(var(--color-panel-border) / <alpha-value>)",
        line: "rgb(var(--color-line) / <alpha-value>)",
        lexical: {
          orange: "#2563EB",
          amber: "#4F46E5",
          indigo: "#4F46E5",
        },
        status: {
          green: "#10B981",
          red: "#EF4444",
          yellow: "#F59E0B",
        },
        ink: {
          DEFAULT: "rgb(var(--color-ink) / <alpha-value>)",
          muted: "rgb(var(--color-ink-muted) / <alpha-value>)",
          dim: "rgb(var(--color-ink-dim) / <alpha-value>)",
        },
      },
      fontFamily: {
        display: ["var(--font-inter)", "system-ui", "sans-serif"],
        body: ["var(--font-inter)", "system-ui", "sans-serif"],
        mono: ["var(--font-jetbrains-mono)", "ui-monospace", "monospace"],
      },
      fontWeight: {
        "500": "500",
        "600": "600",
        "700": "700",
      },
      backgroundImage: {
        "lexical-gradient":
          "linear-gradient(90deg, #2563EB 0%, #3B82F6 55%, #4F46E5 100%)",
        "node-glow":
          "radial-gradient(circle, rgba(37,99,235,0.14) 0%, rgba(37,99,235,0) 70%)",
      },
      animation: {
        "pulse-slow": "pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        "dash": "dash 1.5s linear infinite",
        "float": "float 6s ease-in-out infinite",
        "pulse-ring": "pulse-ring 2s cubic-bezier(0.215, 0.61, 0.355, 1) infinite",
        "fade-up": "fade-up 0.7s cubic-bezier(0.16, 1, 0.3, 1) both",
      },
      keyframes: {
        dash: {
          to: { strokeDashoffset: "-20" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-6px)" },
        },
        "pulse-ring": {
          "0%": { transform: "scale(0.95)", opacity: "0.8" },
          "50%": { transform: "scale(1.1)", opacity: "0.4" },
          "100%": { transform: "scale(1.3)", opacity: "0" },
        },
        "fade-up": {
          from: { opacity: "0", transform: "translateY(16px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
