/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class", // enable dark mode using 'class'
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#B9FF66", // Button color (light mode)
        lightBg: "#FFFFFF", // Page bg (light mode)
        lightGray: "#F3F3F3", // Section bg (light mode)
        darkText: "#191A23", // Text (light mode)

        // DARK MODE COLORS
        darkBg: "#0D0D0D", // Main page bg
        darkGray: "#1A1A1A", // Section bg
        darkTextLight: "#EAEAEA", // Text color for dark mode
      },
    },
  },
  plugins: [require("daisyui")],
};
