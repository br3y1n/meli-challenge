import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  plugins: [],
  theme: {
    extend: {
      colors: {
        primary: "#ffe600",
        "gray-extra-light": "#c0c0c0",
        "gray-light": "#747373",
        "gray-dark": "#424242",
        "blue-light": "#3483fa",
        "blue-dark": "#2e67bd",
        "blue-pale-light": "#e3edfb",
        "blue-pale-dark": "#d2dff0",
      },
      fontSize: {
        xs: "14px",
        md: "16px",
        lg: "20px",
        xl: "24px",
        "2xl": "28px",
        "3xl": "32px",
      },
      screens: {
        xs: "479px",
      },
    },
  },
};

export default config;
