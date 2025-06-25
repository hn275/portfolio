import { heroui } from "@heroui/theme";

/** @type {import('tailwindcss').Config} */
const config = {
  content: [
    "./layouts/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@heroui/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-sans)"],
        mono: ["var(--font-mono)"],
      },
    },
  },
  darkMode: "class",
  plugins: [
    heroui({
      themes: {
        light: {
          colors: {
            primary: "#4A90D9",
            background: "#FFFFFF",
            surface: "#F8F9FA",
            surfaceVariant: "#E9ECEF",
            onBackground: "#212529",
            onSurface: "#495057",
            onSurfaceVariant: "#6C757D",
            border: "#F1F3F4",
            success: "#34CE57",
            warning: "#FFD43B",
            error: "#F86A6A",
            info: "#3DD5F3",
          },
        },

        dark: {
          colors: {
            primary: "#1A5A9A",
            background: "#0D1117",
            surface: "#161B22",
            surfaceVariant: "#21262D",
            onBackground: "#F0F6FC",
            onSurface: "#E6EDF3",
            onSurfaceVariant: "#8B949E",
            border: "#30363D",
            success: "#1E7E34",
            warning: "#E0A800",
            error: "#B02A37",
            info: "#117A8B",
          },
        },
      },
    }),
  ],
};

export default config;
