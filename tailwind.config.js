/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class", // or 'media' if you want to use the system preference
  content: ["./src/**/*.{html,js,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        customGray: "#34353A",
        customGrayText: "#78797D",
        customGrayLight: "#3D3E42",
      },
    },
  },
  plugins: [],
};
