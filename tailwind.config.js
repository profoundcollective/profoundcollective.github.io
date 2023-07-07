/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './**/*.{html,js,jsx,tsx}'
  ],
  theme: {
    extend: {
      fontFamily: {
        'rowdie': ['Rowdies'],
        'josefin': ['Josefin Sans'],
        'roboto': ['Roboto'],
        'zilla': ['Zilla Slab']
      }
    },
  },
  plugins: [],
}
