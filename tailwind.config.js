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
        blueDark: '#4A56C7',
        anilDark: '#2B3165',
        mainDark: '#2D3150',
        escuroDark: '#2E2F3A',
        brancoTransparencia: 'rgb(255, 255, 255, 0.8)',
        cinzaTransparencia: 'rgb(70, 70, 70, 0.8)'
      }
    },
  },
  plugins: [],
}
