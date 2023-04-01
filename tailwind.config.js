/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
      pink : '#CEC2FF',
      black : '#000001', 
      white : '#FFFEFF',
      gray : '#2A2834'
      }
      


    },
  },
  plugins: [],
}