/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        'inter': ['Inter', 'sans-serif'],
      },
      colors: {
        primary: {
          DEFAULT: '#00C97A',
          light: '#1AFF85',
          dark: '#00A865',
        },
      },
      animation: {
        'fade-in': 'fadeIn 1s ease-in-out forwards',
      },
    },
  },
  plugins: [],
};