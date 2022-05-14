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
  },
  plugins: [],
  ...(process.env.NODE_ENV === "production" ? { cssnano: {} } : {}),
};
