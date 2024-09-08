/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        blue: {
          700: "#146eb4",
          800: "#0E4F82",
          950: "#1E2640"
        }
      }
    },
  },
  plugins: [],
}