/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        openSans: ['Poppins', 'sans-serif'],
        libreText: ['Libre Calson Text', 'sans-serif']
      }
    },
  },
  plugins: [],
}