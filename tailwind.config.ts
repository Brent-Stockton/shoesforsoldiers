import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./Components/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      xs: "500px",
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      xxl: "1440px",
      xxxl: "1850px",
      computer: "991px",
    },
    extend: {
      colors: {
        "custom-green": "#4d784e",
        "light-green": "#6ea171",
        "pale-yellow": "#e1d798",
        "dark-brown": "#675645",
        "slate-blue": "#424756",
      },
      fontFamily: {
        army: ["Bebas Neue", "sans-serif"], // Add this line
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
export default config;
