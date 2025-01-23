/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage:{ 'farming1': "url('./src/assets/photos/farming.jpg')" },
    
    },
  },
  plugins: [],
}