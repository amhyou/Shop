/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        col1:'#002B5B',
        col2:"#2B4865",
        col3:"#256D85",
        col4:"#8FE3CF"
      },
      fontFamily:{
        font1:['Alegreya Sans SC', 'sans-serif'],
        font2:['Overlock SC', 'cursive'],
        font3:['PT Sans Caption', 'sans-serif'],
        font4:['Source Serif Pro', 'serif']
      
      },
      backgroundImage: {
        'hero': "url('/hero.png')",
      },
    },
  },
  plugins: [],
}