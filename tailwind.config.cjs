/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
       colors: {
        primary: '#4A90E2',
        accent: '#50C878',
        highlight: '#F5A623'
      },
    },
    plugins: [],
  }
}