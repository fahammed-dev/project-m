/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    colors: {
      'color-black-primary': '#0D062D',
      'color-black-secondary': '#000000',
      'color-gray-primary': '#787486',
      'color-gray-secondary': '#DBDBDB',
      'color-white-primary': '#F5F5F5',
      'color-white-secondary': '#FFFFFF',
      'color-green-primary': '#8BC48A',
      'color-green-bg': '#rgba(131, 194, 157, 0.2);',
      'color-yellow-primary': '#FFA500',
      'color-yellow-secondary': '#fbcb18',
      'color-yellow-ternary': '#D58D49',
      'color-yellow-bg': 'rgba(223, 168, 116, 0.2);',
      'color-lavender-primary': '#5030E5',
      'color-lavender-secondary': '#E4CCFD',
      'color-bg-lavender': '#f1eefd',
      'color-pink-primary': '#D8727D',
      'color-pink-bg': 'rgba(216, 114, 125, 0.1);',
      'color-blue-primary': '#76A5EA',
    },
    fontFamily: {
      inter: ['Inter', 'sans-serif'],
    },
    extend: {},
    screens: {
      xs: '480px',
      sm: '768px',
      md: '1060px',
    },
  },
  plugins: [],
};
