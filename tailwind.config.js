/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        body: ['Inter'],
      },
      colors: {
        primary: ['yellow']
      },
      backgroundColor: {
        'primary': '#0074d9'
      }
    },
  },
  plugins: [],
}