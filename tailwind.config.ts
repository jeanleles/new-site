/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    './src/app/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
    './src/pages/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        verde: {
          200: '#00df89',
          300: '#0ae897',
          400: '#26f1a2',
          500: '#1acc8c',
          600: '#15a971',
          700: '#11865a',
          800: '#0c6242',
          900: '#030504',
        },
      },
    },
  },
  plugins: [],
};
