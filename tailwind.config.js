/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,jsx}",
    "./components/**/*.{js,jsx}",
    "./data/**/*.{js,jsx}"
  ],
  theme: {
    extend: {
      colors: {
        porcelain: "#fffaf6",
        veil: "#f8efe7",
        nude: "#d8bea8",
        sand: "#b99d82",
        ink: "#171412",
        espresso: "#3a2b23",
        champagne: "#c7a66a"
      },
      boxShadow: {
        soft: "0 24px 80px rgba(58, 43, 35, 0.12)",
        glow: "0 18px 50px rgba(199, 166, 106, 0.25)"
      },
      fontFamily: {
        display: ["Cormorant Garamond", "Georgia", "serif"],
        body: ["Inter", "Segoe UI", "Arial", "sans-serif"]
      },
      keyframes: {
        floatIn: {
          "0%": { opacity: 0, transform: "translateY(18px)" },
          "100%": { opacity: 1, transform: "translateY(0)" }
        },
        softPulse: {
          "0%, 100%": { opacity: 0.55 },
          "50%": { opacity: 1 }
        }
      },
      animation: {
        "float-in": "floatIn 700ms ease both",
        "soft-pulse": "softPulse 3s ease-in-out infinite"
      }
    }
  },
  plugins: []
};
