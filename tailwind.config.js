/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage:{
        home_bg:"url(/backgrounds/home_bg.png)"
      },
      fontFamily:{
        mutant: "Mutant Academy BB" // custom font use
      },
      keyframes:{
        slide_infinite:{
          "0":{
            "-moz-transform": "translateX(100%)",
            "-webkit-transform": "translateX(100%)",
            "transform": "translateX(100%)"
          },
          "100%": { 
            "-moz-transform": "translateX(-100%)",
            "-webkit-transform": "translateX(-100%)",
            "transform": "translateX(-100%)"
          }
        }
      },
      animation: {
        slides_linear: 'slide_infinite 20s  linear infinite',
      }

    },
  },
  plugins: [],
}