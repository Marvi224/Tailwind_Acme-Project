/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./build/**/*.{html,js}"],/*This should only be used when we have 2 folders that we want tailwind to look into*/
  theme: {
    extend: {
      screens: {
        'widescreen':{'raw': '(min-aspect-ratio: 3/2)'},
        'tallscreen':{'raw': '(max-aspect-ratio: 13/20)'},

      },
      keyframes: {
        'open-menu':{
          '0%': {transform: 'scaleY(0)'},
          '80%': {transform: 'scaleY(1.2)'},
          '100%': {transform: 'scaleY(1)'},
        },
      },
      animation: {
        'open-menu': 'open-menu 0.5s ease-in-out forwards',

      }
    },
  },
  plugins: [],
}

