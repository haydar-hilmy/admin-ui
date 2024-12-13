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
        primary: "var(--color-primary)",
        secondary: "#525256"
      },
      backgroundColor: {
        'primary': 'var(--color-primary)',
        // 'primary': '#0074d9',
        'main-bg': '#f3f3f3'
      }
    },
  },
  plugins: [],
}