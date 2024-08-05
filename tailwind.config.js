/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{rs,html}"],
  theme: {
    extend: {
      colors: {
        primary: "#64748b",
        secondary: "#cbd5e1",
      },
    },
  },
  plugins: [],
};
