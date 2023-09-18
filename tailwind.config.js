/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        lalezar: "var(--font-lalezar)",
      },
      boxShadow: {
        selectedShoadow: "0px 4px 4px -2px rgba(0, 0, 0, 0.25)",
        cardShadow: "0px 4px 24px -1px rgba(0, 0, 0, 0.20)",
        imageShadowDark: '0px 4px 7px -1px rgba(146, 197, 255, 0.57)',
        imageShadowlight: '0px 4px 4px 0px rgba(0, 0, 0, 0.25)',
        buttonShadow: '0px 4px 4px 0px rgba(0, 0, 0, 0.25) inset',
        registerShadow: '0px 4px 10px 1px rgba(0, 0, 0, 0.25) inset',
        bestChoice : '8px 8px 7px -2px rgba(0, 0, 0, 0.25)',
        payment : '0px 4px 10px 3px rgba(146, 197, 255, 0.57) inset'
      },
      backgroundColor: {
        cardBgBlur: [
          "linear-gradient(149deg, #FFF 0%, rgba(217, 217, 217, 0.00) 100%)",
        ],
      },
    },
  },
  plugins: [],
};
