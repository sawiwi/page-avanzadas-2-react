/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      backgroundImage: {
        'img-departamento': "url('https://res.cloudinary.com/dvdb33uyj/image/upload/v1690906191/Projects/unne/img/Invertir/UNIDADES_NUEVAS__DEPARTAMENTO_ffxlui.webp')",
        'img-estacionamiento': "url('https://res.cloudinary.com/dvdb33uyj/image/upload/v1690906035/Projects/unne/img/Invertir/UNIDADES_NUEVAS__ESTACIONAMIENTO_ag2mc7.webp')",
        'img-bodega': "url('https://res.cloudinary.com/dvdb33uyj/image/upload/v1690906185/Projects/unne/img/Invertir/UNIDADES_NUEVAS__BODEGA_oxyv3r.webp')",
      },
      screens:{
        'sm': '640px',
        //@media (min-width: 640px)
        'md': '768px',
        //@media (min-width: 768px)
        'lg': '1024px',
        //@media (min-width: 1024px)
        'xl': '1280px',
        //@media (min-width: 1280px)
        '2xl': '1536px',
        //@media (min-width: 1536px)
        '3xl': '1920px',
        //@media (min-width: 1920px)
      },
      fontFamily:{
          customFont:['Work Sans', 'sans-serif']
      },
      colors: {
          primary: {
            DEFAULT: '#FDFBF6',
            opacity: '#FDFBF6d4',
            ligth: '#FDFBF6',
            700: '#f8f8f8',
         
          },
        secondary: {
          DEFAULT: '#242422',
          opacity: '##242422d4',
          ligth: '#3f3f3c',
          700: '#333331',
          800:'#1b1b1a',
          grey: '#5b5b5b'
    
        },

      },
    },
  },
  plugins: [require('daisyui')],
};
