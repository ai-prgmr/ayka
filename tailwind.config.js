/** @type {import('tailwindcss').Config} */
const colors = require("tailwindcss/colors");

module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    container: {
      center: true,
      padding: "1rem",
    },
    colors: {
      current: "currentColor",
      transparent: "transparent",
      white: "#FFFFFF",
      black: "#090E34",
      dark: "#1D2144",
      gray: colors.gray,
      green: colors.green,
      primary: "#4A6CF7",
      yellow: "#FBB040",
      tint: "#ece3d9",
      brown: colors.brown,
      "body-color": colors.white,
      pink: colors.pink,
      purple: colors.purple,
      blue: colors.blue,
      slate: colors.slate,
      indigo: colors.indigo,
    },
    screens: {
      xs: "450px",
      // => @media (min-width: 450px) { ... }

      sm: "575px",
      // => @media (min-width: 576px) { ... }

      md: "768px",
      // => @media (min-width: 768px) { ... }

      lg: "992px",
      // => @media (min-width: 992px) { ... }

      xl: "1200px",
      // => @media (min-width: 1200px) { ... }
    },
    extend: {
      boxShadow: {
        signUp: "0px 5px 10px rgba(4, 10, 34, 0.2)",
        one: "0px 2px 3px rgba(7, 7, 77, 0.05)",
        sticky: "inset 0 -1px 0 0 rgba(0, 0, 0, 0.1)",
      },
      backgroundImage: {
        "watermark-pattern": "url('/images/logo/ayka-watermark-removebg.png')",
      },
      backgroundSize: {
        "1/2": "50%",
        "3/4": "75%",
      },
    },
  },
  plugins: [],
};
