/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        poppins:['Poppins','sans-serif'],
      },
      colors:{
        darkgreen:'#1A4100',
        lightgreen:'#CBFB99',
        green1:'#417F00',
        color1:'#6CB82D',
        color2:'#FFF600',
        color3:'#84FF00',
        color4:'#23BF00',
        color5:'#3C7400'
      }
    },
  },
  plugins: [],
}

