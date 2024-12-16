/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
        crimson: ['Crimson Text', 'serif'],
        manrope: ['Manrope', 'sans-serif'],
        geist: ['Geist', 'sans-serif']
      }
    }
  },
  plugins: [require('@tailwindcss/typography')]
};
