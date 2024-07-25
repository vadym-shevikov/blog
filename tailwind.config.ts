import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1", zIndex: "10" },
        },
      },
      animation: {
        fadeIn: "fadeIn 0.3s ease-in forwards",
      },
    },
  },
  darkMode: ["selector", "[data-theme='dark']"],
};
export default config;
