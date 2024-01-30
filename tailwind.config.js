/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'max-sm': { max: '479px' }, // Custom breakpoint between sm and md
        'min-w375-max-h720': { min: '540', max: '720px' },
        '2xl': {'min': '1024px', 'max': '1365px'},
        '3xl': {'min': '1026px', 'max': '1367px'}, 
        '4xl': { min: '1368px' },
      },
    },
  },
  plugins: [],
}

