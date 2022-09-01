/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      xs: "475px",
      ...defaultTheme.screens,
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      "corporate",
      "light",
      "cupcake",
      "bumblebee",
      "emerald",
      "retro",
      "cyberpunk",
      "valentine",
      "halloween",
      "garden",
      "lofi",
      "pastel",
      "fantasy",
      "wireframe",
      "dracula",
      "cmyk",
      "autumn",
      "acid",
      "lemonade",
      "winter",
    ],
  },
};
