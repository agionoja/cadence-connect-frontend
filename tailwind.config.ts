import type { Config } from "tailwindcss";

export default {
  content: ["./app/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "footer-pattern": "url(/app/assets/images/footer.png)",
        "header-bg":
          "linear-gradient(to bottom, rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.7)),url(/app/assets/images/hero.jpg)",
      },
    },
  },
  plugins: [],
} satisfies Config;
