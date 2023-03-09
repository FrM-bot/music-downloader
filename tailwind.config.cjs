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
        'custom-cyan': 'rgba(var(--custom-cyan) / <alpha-value>)',
        'custom-dark': 'rgba(var(--custom-dark) / <alpha-value>)',
        'custom-dark-2': 'rgba(var(--custom-dark-2) / <alpha-value>)',
        'custom-white': 'rgba(var(--custom-white) / <alpha-value>)',
        'custom-pink': 'rgba(var(--custom-pink) / <alpha-value>)',
        primary: 'rgba(var(--primary) / <alpha-value>)',
        secondary: 'rgba(var(--secondary) / <alpha-value>)',
      }
    }
  },
  darkMode: ['class', '[data-theme="dark"]'],
  plugins: []
}
