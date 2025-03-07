/** @type {import('tailwindcss').Config} */
import preline from "preline/plugin";
export default {
  darkMode: "class",
  content: [
    "./index.html",
    "./src/**/*.{html,js,ts,jsx,tsx}",
    "./node_modules/preline/preline.js",
  ],
  theme: {
    extend: {},
  },
  // eslint-disable-next-line no-undef
  plugins: [preline],
};
