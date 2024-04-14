/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        white: "#ffffff",
        black: "#111111",
        modal: "rgb(136, 136, 136)",
        red: "#b20101",
        gray: "#e7e7e7",
        lightGrey: "#f3f3f3",
        // modal: "rgba(17, 17, 17, 0.2)",
      },
    },
  },
  plugins: [],
};