import { transform } from 'typescript';

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'mobile': "0px",
        // => @media (min-width: 0px) { ... }
        'tablet': "640px",
        // => @media (min-width: 640px) { ... }
        'laptop': "1024px",
        // => @media (min-width: 1024px) { ... }
        'desktop': "1280px",
        // => @media (min-width: 1280px) { ... }
        'desktop-l': "1920px",
        // => @media (min-width: 1280px) { ... }
        'desktop-xl': "2560px",
        // => @media (min-width: 1280px) { ... }
        'desktop-xxl': "3840px",
        // => @media (min-width: 1280px) { ... }
        'tablet-contact' : "702px",
      },
      animation:{
        ownpulse:'ownpulse 0.9s ease-in infinite',
        loading:'loading 6.5s ease-in-out infinite'
      },
      keyframes: {
        ownpulse:{
          '0%':{opacity:'100%'}, 
          '50%':{opacity:'30%'},
          '100%':{opacity:'100%'}
        },
        loading:{
          '0%':{transform:'translateX(-2rem)'},
          '50%':{transform:'translateX(-50rem)'},
        }
      },
    },
  },
  plugins: [],
}

