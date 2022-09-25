/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
    "./src/content/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        mainColor: '#F1DBA1',
        deleteColor: '#FFAD93',
        brancoTransparencia: 'rgb(255, 255, 255, 0.8)',
      }
    },
  },
  plugins: [],
}
