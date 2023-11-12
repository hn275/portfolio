/** @type {import('tailwindcss').Config} */
export default {
    content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
    theme: {
        extend: {
            colors: {
                "accent-50": "#8095D1",
                "accent-100": "#6587E4",
                "accent-200": "#4463B9",
                "accent-300": "#385593",
            },
        },
    },
    plugins: [],
};
