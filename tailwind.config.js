/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#ffffff',
        secondary: '#474747',
        surface: '#131313',
      },
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
        poppins: ['Poppins', 'sans-serif'],
        milchella: ['Milchella', 'sans-serif'],
        wasted: ['"Wasted Vindey"', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
