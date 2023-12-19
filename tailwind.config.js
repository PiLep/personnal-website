/*eslint-disable */
const { screens } = require('tailwindcss/defaultTheme')
module.exports = {
  purge: false,
  variants: {
  },
  plugins: [],
  theme: {
    extend: {
        fontFamily: {
            'sans': ['Barlow Condensed', 'serif'],
            'secondary': ['Montserrat', 'serif'],
            }
        }
    }
}
