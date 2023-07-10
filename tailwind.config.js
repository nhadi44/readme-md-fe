/* eslint-disable no-undef */
/** @type {import('tailwindcss').Config} */

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "node_modules/daisyui/dist/**/*.js",
    "node_modules/react-daisyui/dist/**/*.js",
  ],
  theme: {
    extend: {},
    container: {
      center: true,
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: false, // true: all themes | false: only light + dark | array:
    darkTheme: "light",
  },
};
