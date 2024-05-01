/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#DF2144",
        Secondary: "#1EB7E8",
        third: "#4B4B4B",
      },
      fontFamily: {
        vazir: ["vazir", "sans-serif"],
        lalezar: ["lalezar", "sans-serif"],
      },
    },
  },
  plugins: [],
};
