/** @type {import('tailwindcss').Config} */

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      browntheme : '#B05405',
      greyborder : 'rgba(79, 79, 79, 0.3)',
      greytext: 'rgba(79, 79, 79, 0.6)',
      primaryblack : '#121212',
      secondaryblack : '#4f4f4f',
      footerline: 'rgba(18,18,18,0.2)',
      greentheme: '#069b10',
      bluetheme: '#0B069B',
      pinktheme: '#BC0957',
      footerbg: '#FBEDE2'
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
    extend: {
     
    },
  },
  plugins: [],
}