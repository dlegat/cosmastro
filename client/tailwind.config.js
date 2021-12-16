// const colors = require('tailwindcss/colors')
module.exports = {
   purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
    darkMode: false, // or 'media' or 'class'
    // important: true,
    theme: {
      extend: {
        colors: {
          'blue-primary': '#00274C',
          'blue-secondary': '#00014C',
          'white': '#ffffff',
          'purple': '#3f3cbb',
          'midnight': '#121063',
          'metal': '#565584',
          'tahiti': '#3ab7bf',
          'silver': '#evebff',
          'bubble-gum': '#ff77e9',
          'bermuda': '#78dcca',
        }
      },
    },
    variants: {
      extend: {
        backgroundColor: ['active'],
      },
    },
  }