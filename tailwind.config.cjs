/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{html,js,jsx}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        primary: "#0a0a0a",
        secondary: "#158ec7",
        dimWhite: "rgba(255, 255, 255, 0.7)",
        dimBlue: "rgba(21, 142, 199, 0.1)",
        dolyBlue: "#158ec7",
        dolyDark: "#0a0a0a",
        dolyGray: "#1a1a1a",
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
    },
    screens: {
      xs: "480px",
      ss: "620px",
      sm: "768px",
      md: "1060px",
      lg: "1200px",
      xl: "1700px",
    },
  },
  plugins: [],
};