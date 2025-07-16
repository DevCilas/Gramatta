/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#1e40af',
        'gram-white': '#f7f7f7',
        'gram-dark-blue': '#243666',
        'gram-green': '#8cd8be',
        'gram-blue': '#0e6ba7',
      },
      fontFamily: {
        'bahnschrift': ['Bahnschrift', 'Arial', 'sans-serif'],
        'sans': ['Bahnschrift', 'Arial', 'sans-serif'],
      },
    },
  },
  plugins: [],
} 