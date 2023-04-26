/** @type {import('tailwindcss').Config} */
module.exports = {
 
  content: ["./App.{js,jsx,ts,tsx}",
    "./screens/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",],
  theme: {
    fontFamily: {
      calibre: [
        'Calibre-Regular'
      ],
      calibreMedium: [
        'Calibre-Medium'
      ],
      calibreBold: [
        'Calibre-Bold'
      ],
    },
   
   

    extend: {},
  },
  plugins: [],
}

