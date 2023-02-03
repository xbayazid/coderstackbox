/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        primary: "#001419",
        secondary: "#40DB6C",
        accent: "#47B5FF",
        dimWhite: "rgba(255, 255, 255, 0.7)",
        dimGreen: "rgb(66, 226, 111, 0.2)",
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
      transitionTimingFunction: {
        'out-flex': 'cubic-bezier(0.05, 0.6, 0.4, 0.9)',
      },
    },
  },
  plugins: [require("daisyui")],
}
