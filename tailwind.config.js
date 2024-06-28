/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class", // or 'media' if you want to use the system preference
  content: ["./src/**/*.{html,js,jsx,tsx}"],
  theme: {
    extend: {},
    colors: {
      dText: "#dee9fc",
      dBackground: "#020c1a",
      dPrimary: "#85acf6",
      dSecondary: "#770c9b",
      dAccent: "#ef32d9",
      wText: "#030e21",
      wBackground: "#e7f0fd",
      wPrimary: "#09317b",
      wSecondary: "#cf62f3",
      wAccent: "#cc0fb6",
    },
  },
  plugins: [],
};
