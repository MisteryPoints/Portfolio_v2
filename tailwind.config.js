const { fontFamily } = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
    "./src/app/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        mont: ["var(--font-mont)", ...fontFamily.sans],
      },
      colors: {
        dark: "#1b1b1b",
        light: "#f5f5f5",
        primary: "#7319A4",
        primaryDark: "#58E6D9",
      },
      animation: {
        "spin-slow": "spin 10s linear infinite",
      },
      backgroundImage: {
        circularLight:
          "repeating-radial-gradient(rgba(0,0,0,0.4) 2px, #F5F5F5 5px, #F5F5F5 100px);",
        circularDark:
          "repeating-radial-gradient(rgba(255,255,255,0.5) 2px, #1b1b1b 5px, #1b1b1b 100px);",
      },
    },
  },
  plugins: [],
};
