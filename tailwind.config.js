/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      backdropBlur: {
        xs: '3.2px',
      },
      boxShadow: {
        '3xl': '0 4px 30px rgba(0, 0, 0, 0.1)',
      },
      colors: {
        newBlack: 'rgba(255, 255, 255, 0.04)',
        regalblue: '#19a7ce',
      },
    },
  },
  plugins: [],
};
