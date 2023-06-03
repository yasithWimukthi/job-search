/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");
module.exports = {
  content: [],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Open Sans", ...defaultTheme.fontFamily.sans],
      },
      colors: {
        "brand-grey-1": "#dadce0",
        "brand-blue-1": "#1967d2",
        "brand-green-1": "#137333",
      },
    },
  },
  plugins: [],
};
