import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          DEFAULT: "#1a2332",
          50: "#38455A",
          100: "#323F4E",
          200: "#2C3942",
          300: "#263336",
          400: "#202D2A",
          500: "#1a2332",
          600: "#141D28",
          700: "#0E171E",
          800: "#081114",
          900: "#020B0A",
        },
        gold: {
          DEFAULT: "#c9a84c",
          50: "#F5E8C4",
          100: "#F0E0B6",
          200: "#E8D19A",
          300: "#E0C27E",
          400: "#D8B362",
          500: "#c9a84c",
          600: "#B0923F",
          700: "#8F7632",
          800: "#6E5A25",
          900: "#4D3E18",
        },
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};

export default config;