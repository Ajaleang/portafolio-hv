/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // RGB channel format allows opacity modifiers (bg-cafe/60, etc.)
        cafe: 'rgb(var(--cafe) / <alpha-value>)',
        'cafe-claro': 'rgb(var(--cafe-claro) / <alpha-value>)',
        dorado: 'rgb(var(--dorado) / <alpha-value>)',
      },
    },
  },
  plugins: [],
}
