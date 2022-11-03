/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')
module.exports = {
  content: [
    "./client/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Barlow', ...defaultTheme.fontFamily.sans]
      },
      colors: {
        'custom-cyan': '#15e8cf',
        'custom-dark': '#18191c',
        'custom-dark-2': '#242424b3',
        'custom-white': '#fff'
      }
    }
  },
  darkMode: ['class', '[data-theme="dark"]'],
  plugins: []
}
