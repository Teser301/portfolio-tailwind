export default {
  darkMode: "media",
  content: ["./src/**/*.{html,js,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        text: "var(--text)",
        background: "var(--background)",
        backgroundPrimary: "var(--backgroundPrimary)",
        backgroundSecondary: "var(--backgroundSecondary)",
        primary: "var(--primary)",
        secondary: "var(--secondary)",
        accent: "var(--accent)",
        dark: "var(--dark)",
        light: "var(--light)",
      },
    },
  },
  plugins: [],
};
