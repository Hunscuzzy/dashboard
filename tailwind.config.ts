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
        primary: { DEFAULT: "#457b9d", dark: "#1d3557", light: "#a8dadc" },
        secondary: { DEFAULT: "#e63946", dark: "#a81d28", light: "#bd5b60" },
        grey: { DEFAULT: "#434343", dark: "#1e1e1e", light: "#a8a8a8" },
      },
    },
  },
};
export default config;
