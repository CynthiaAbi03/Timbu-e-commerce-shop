/** @type {import('tailwindcss').Config} */
import withMT from "@material-tailwind/react/utils/withMT";
import colors, { gray } from 'tailwindcss/colors';
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      browntheme : '#B05405',
      hoverbrown: '#904504',
      white : '#FFFFFF',
      greyborder : 'rgba(79, 79, 79, 0.3)',
      greytext: 'rgba(79, 79, 79, 0.9)',
      primaryblack : '#121212',
      secondaryblack : '#4f4f4f',
      footerline: 'rgba(18,18,18,0.2)',
      greentheme: '#069b10',
      bluetheme: '#0B069B',
      pinktheme: '#BC0957',
      footerbg: 'rgba(251,237,226,2.2)',
      greyfill: 'rgba(185,179,179,0.4)',
      black: '#000000',
      gray: colors.gray,
    },
    spacing: {
      'custom-mr' : '50px',
      'custom-ml' : '50px',
    },
    fontFamily: {
      'Messiri': ["El Messiri", 'sans-serif'],
      'aeonik': ['Aeonik', 'sans-serif']
    },
    fontWeight: {
      'light': 100,
      'medium': 500,
      'bold': 700,
      // Add additional font weights as needed
    },
    backgroundImage: {
      'hero-pattern': "url('../assets/images/HeroImage.png')"
    },
    screens: {
        'sm' : '720px',
        'md' : '1200px',
        'xl': '1320px',
        'xsm': '440px'
    },
    extend: {
     
    },
  },
  plugins: [
    require("tailwindcss"),
    require("autoprefixer"),
  ],
}