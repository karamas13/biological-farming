/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html", "./src/**/*"
  ],
  theme: {
    extend: {
      backgroundImage:{ 
        'farming1': "url('/photos/farming.jpg')",
        'map': "url('/photos/map.webp')",  
        'map2': "url('/photos/map2.jpg')",  
        'map3': "url('/photos/map3.jpeg')",  
      },
     
    
    },
  },
  plugins: [
    require('tailwind-scrollbar'),
  ],
}