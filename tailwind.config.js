/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage:{ 
        'farming1': "url('./src/assets/photos/farming.jpg')",
        'map': "url('./src/assets/photos/map.webp')",  
        'map2': "url('./src/assets/photos/map2.jpg')",  
        'map3': "url('./src/assets/photos/map3.jpeg')",  
      },
     
    
    },
  },
  plugins: [
    require('tailwind-scrollbar'),
  ],
}