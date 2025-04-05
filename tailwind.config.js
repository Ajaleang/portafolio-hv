/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        cafe: {
          DEFAULT: '#2e1f1c', // fondo principal
          claro: '#4a332f', // un poco más claro para secciones
        },
        dorado: '#d4af37', // acentos y detalles
      },
    },
  },
  plugins: [],
}
