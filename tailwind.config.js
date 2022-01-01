module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  mode: "jit",
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        spartan: ["Spartan", "sans-serif"]
      },
      colors: {
        desaturatedDarkCyan: "#5BA4A4",
        bgColor: "#effafa",
        filterTabletsColor: "#eef6f6",
        darkGrayishCyan: "#7b8e8e",
        veryDarkGrayish: "#2c3a3a"
      }
    }
  },
  variants: {
    extend: {}
  },
  plugins: []
};
