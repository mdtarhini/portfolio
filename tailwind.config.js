// tailwind.config.js
module.exports = {
  purge: ["./pages/**/*.js", "./components/**/*.js"],
  darkMode: "class", // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        montserrat: "Montserrat, sans-serif",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
