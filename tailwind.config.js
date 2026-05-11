/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          red: "#C0392B",
          "red-dark": "#96281B",
          "red-light": "#E74C3C",
          dark: "#1A1A1A",
          gray: "#2C2C2C",
          "gray-mid": "#6B6B6B",
          "gray-light": "#F5F5F5",
          white: "#FFFFFF",
        },
      },
      fontFamily: {
        sans: ["'DM Sans'", "system-ui", "sans-serif"],
        display: ["'Playfair Display'", "Georgia", "serif"],
        script: ["'Dancing Script'", "cursive"],
      },
      boxShadow: {
        card: "0 2px 20px rgba(0,0,0,0.08)",
        "card-hover": "0 8px 40px rgba(0,0,0,0.14)",
      },
    },
  },
  plugins: [],
};
