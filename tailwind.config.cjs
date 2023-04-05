/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    fontFamily: {
      mono: "JetBrains Mono",
    },
    extend: {
      fontFamily: {
        roboto: ["Roboto", "sans-serif"],
      },
      colors: {
        "brand-50": "#8095D1",
        "brand-100": "#6587E4",
        "brand-200": "#4463B9",
        "brand-300": "#385593",
      },
    },
  },
  plugins: [require("autoprefixer")],
};
