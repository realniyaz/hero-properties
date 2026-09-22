import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        ivory: {
          DEFAULT: "#FDFBF7",
          50: "#FFFFFF",
          100: "#FDFBF7",
          200: "#F7F2E7",
          300: "#EFE6D4",
          border: "#E8DEC8",
        },
        gold: {
          light: "#F3E2B8",
          DEFAULT: "#C5A059",
          metallic: "#D4AF37",
          dark: "#9E7B35",
        },
        heroRed: {
          light: "#FF3847",
          DEFAULT: "#E31826", // Signature Hero Homes Red
          hover: "#C9101C",
          dark: "#990812",
        },
        charcoal: {
          DEFAULT: "#121214",
          light: "#1F2024",
          muted: "#5A5D64",
        },
      },
      fontFamily: {
        serif: ["var(--font-playfair)", "serif"],
        sans: ["var(--font-inter)", "sans-serif"],
      },
      boxShadow: {
        luxury: "0 10px 30px -5px rgba(227, 24, 38, 0.08), 0 8px 10px -6px rgba(197, 160, 89, 0.1)",
        goldGlow: "0 0 25px -5px rgba(212, 175, 55, 0.3)",
      },
    },
  },
  plugins: [],
};

export default config;