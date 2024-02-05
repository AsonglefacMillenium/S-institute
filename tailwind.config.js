/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        'primary-dark': {
          DEFAULT: '#191919',
          'light': '#1d2629'
        },
        'primary-red':{
          DEFAULT:'#E1423E'
        },
        'primary-grey': {
          DEFAULT: '#F5F4F3'
        },
        'primary-teal':{
          DEFAULT:'#001725'
        },
        'primary-blue': {
          DEFAULT: '#0C709E'
        }
        
      }
    },
  },
  plugins: [],
}
