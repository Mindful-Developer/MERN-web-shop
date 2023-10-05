/*
  tailwind.config.js
  Christopher James
  301252282
  2023-10-01
 */

/** @type {import('tailwindcss').Config} */

const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: [
    "../config/express.js",
    "../app/routes/*.js",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter var", ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: ["prettier-plugin-tailwindcss"],
};
