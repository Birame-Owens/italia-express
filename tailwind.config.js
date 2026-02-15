/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#dc2626',
        secondary: '#15803d',
        dark: '#1f2937',
        light: '#ffffff',
        gray: '#f3f4f6',
      },
      fontFamily: {
        primary: ['Arial', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
