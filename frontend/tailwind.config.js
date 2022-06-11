/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    fontFamily: {
      sans: ["Oswald", "sans-serif"],
    },
    extend: {
      screens: {
        "3xl": "1792px",
      },
    },
  },
  plugins: [],
  darkMode: "class",
};
