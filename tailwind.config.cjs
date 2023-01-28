/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      'bgColor': '#1A232E',
      'white': '#FFFFFF',
      'gray': '#B0B0B0'
    },
    fontFamily: {
      eudoxus: ['eudoxus sans']
    },
    extend: {},
  },
  plugins: [],
}
