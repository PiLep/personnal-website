/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ['./index.html'],
  theme: {
    extend: {
      fontFamily: {
        display: ['Space Grotesk', 'ui-sans-serif', 'system-ui'],
        secondary: ['Inter', 'ui-sans-serif', 'system-ui']
      }
    }
  },
  plugins: []
}
