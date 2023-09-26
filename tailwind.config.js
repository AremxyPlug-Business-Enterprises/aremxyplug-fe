/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}",],
  theme: {
    screens :{
      lg:'1200px',
      md:'825px',
     sm: '360px'
    },
    extend: {
      colors: {
        primary: '#04177F',
        secondary: '#CED9FF'
      }
    },
  },
  plugins: [],
}

