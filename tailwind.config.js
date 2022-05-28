const colors = require("tailwindcss/colors");

module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
    "./src/hocs/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      mainBlue: "#009ae0",
      mainPink: "#dc017c",
      mainYellow: "#ffee00",
      transparent: "transparent",
      blue: colors.blue,
      current: "currentColor",
      black: "#0e1318",
      red: colors.red,
      white: colors.white,
      gray: colors.gray,
      emerald: colors.emerald,
      indigo: colors.indigo,
      yellow: colors.yellow,
    },
    fontFamily: {
      main: ["Montserrat Alternates", "sans-serif"],
    },
    extend: {},
    screens: {
      sm: "640px",
      // => @media (min-width: 640px) { ... }

      md: "768px",
      // => @media (min-width: 768px) { ... }

      lg: "1024px",
      // => @media (min-width: 1024px) { ... }

      xl: "1280px",
      // => @media (min-width: 1280px) { ... }

      "2xl": "1536px",
      // => @media (min-width: 1536px) { ... }
    },
  },
  plugins: [],
  ...(process.env.NODE_ENV === "production" ? { cssnano: {} } : {}),
};
