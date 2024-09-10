/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        background: '#252422',
        columnBg: '#CCC5B9',
        columnLightBg: '#FFFCF2',
        primary: '#EB5E28',
        secondary: '#403D39',
      },
    },
  },
  plugins: [],
};
