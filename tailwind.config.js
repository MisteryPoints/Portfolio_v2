const { fontFamily } = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./hooks/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}",
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
          "repeating-radial-gradient(rgba(255,255,255,0.5) 2px, #1b1b1b 8px, #1b1b1b 100px);",
        circularLightLg:
          "repeating-radial-gradient(rgba(0,0,0,0.4) 2px, #F5F5F5 5px, #F5F5F5 80px);",
        circularDarkLg:
          "repeating-radial-gradient(rgba(255,255,255,0.5) 2px, #1b1b1b 5px, #1b1b1b 80px);",
        circularLightMd:
          "repeating-radial-gradient(rgba(0,0,0,0.4) 2px, #F5F5F5 5px, #F5F5F5 60px);",
        circularDarkMd:
          "repeating-radial-gradient(rgba(255,255,255,0.5) 2px, #1b1b1b 6px, #1b1b1b 60px);",
        circularLightSm:
          "repeating-radial-gradient(rgba(0,0,0,0.4) 2px, #F5F5F5 5px, #F5F5F5 40px);",
        circularDarkSm:
          "repeating-radial-gradient(rgba(255,255,255,0.5) 2px, #1b1b1b 4px, #1b1b1b 40px);",
      },
    },
    screens: {
      "3xl": { max: "1950px" },
      // => @media(max-width: 1950px) { ... }
      "2xl": { max: "1535px" },
      // => @media(max-width: 1535px) { ... }
      xl: { max: "1279px" },
      // => @media(max-width: 1279px) { ... }
      lg: { max: "1023px" },
      // => @media(max-width: 1023px) { ... }
      md: { max: "767px" },
      // => @media(max-width: 767px) { ... }
      sm: { max: "639px" },
      // => @media(max-width: 639px) { ... }
      xs: { max: "400px" },
      // => @media(max-width: 400px) { ... }
      xxs: { max: "300px" },
      // => @media(max-width: 300px) { ... }
    },
  },
  plugins: [],
};
