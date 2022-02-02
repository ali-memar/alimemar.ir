module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        brand: {
          DEFAULT: "#ffc107",
        },
        inset: ["hover"],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
