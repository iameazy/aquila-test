/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      './app/**/*.{js,ts,jsx,tsx,mdx}',      // Changed from ./src/app/
      './components/**/*.{js,ts,jsx,tsx,mdx}',  // Changed from ./src/components/
    ],
    theme: {
      extend: {
        colors: {
          primary: '#FF8C42',
          primaryHover: '#FF7A2E',
          dark: '#0A0A0A',
          darkGray: '#1A1A1A',
          lightGray: '#B0B0B0',
        },
        fontFamily: {
          sans: ['Inter', 'system-ui', 'sans-serif'],
        },
      },
    },
    plugins: [],
  }