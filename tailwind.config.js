/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      borderRadius: {
        lg: "0.625rem",
        sm: "0.25rem",
        "4xl": "2rem",
      },

      colors: {
        white: "#ffffff",
        black: "#111111",
        modal: "rgb(0,0,0,0.3)",
        red: "#b20101",
        gray: "#e7e7e7",
        lightGrey: "#f3f3f3",
        // darkGray: "#767474",
        // modal: "rgba(17, 17, 17, 0.2)",
      },
    },
  },
  plugins: [],
};
