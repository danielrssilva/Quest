/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      // animations
      animation: {
        'spin-slowest': 'spin 30s linear infinite',
        'spin-slow': 'spin 12s linear infinite',
      },
      colors: {
        white: '#ffffff',
        background: '#f5f5f5',
        foreground: '#3c353d',
        'foreground-light': '#6E696F',
        disabled: ' #e7e6e7',
        accent: '#740986',
        'accent-light': '#ECDDFF',
        'accent-pink': '#EBDFE9',
        external: '#370e6b',
        error: '#f44336',
        warning: '#ffc107',
        success: '#1ab03b',
        information: '#370e6b',
        tags: {
          orange: '#ff6f07',
          green: '#1ab03b',
          blue: '#0d6efd',
        },
      },
      transitionProperty: {
        height: 'height',
        width: 'width',
        'height-shadow': 'height, box-shadow',
      },
    },
  },
  fontFamily: {
    lato: ['Lato', 'sans-serif'],
  },
  plugins: [],
};
