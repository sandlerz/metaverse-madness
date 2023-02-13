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
      'gray': '#B0B0B0',
      'gray2': 'rgba(255, 255, 255, 0.08)'
    },
    fontFamily: {
      eudoxus: ['eudoxus sans']
    },
    extend: {
      flex: {
        '2': '2 2 0%'
      }
    },
  },
  plugins: [],
}
