/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  darkMode:"class",
  theme: {
    extend: {
      colors:{
        DarkBlue /*(Dark Mode Elements)*/: "hsl(209, 23%, 22%)",
        VeryDarkBlue /*(Dark Mode Background)*/: "hsl(207, 26%, 17%)",
        VeryDarkBlue /*(Light Mode Text)*/: "hsl(200, 15%, 8%)",
        DarkGray /*(Light Mode Input)*/: "hsl(0, 0%, 52%)",
        VeryLightGray /*(Light Mode Background)*/: "hsl(0, 0%, 98%)",
        White /*(Dark Mode Text & Light Mode Elements)*/: "hsl(0, 0%, 100%)"
      }
    },
  },
  plugins: [],
}
