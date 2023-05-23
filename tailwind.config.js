/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontSize: {
        'h1': '3rem',
        'h2': '2.438rem',
        'h3': '2rem',
        'h4': '1.563rem',
        'h5': '1.25rem',
        'h6': '1rem',
      },
      screens: {
        'desktop': '1440px',
        'laptop': '1140px',
        'ipad': '990px',
        'tablet': '768px',
        'mobile': '440px'
      },
      colors: {
        'theme_color': '#219D80',
        'heading_color': '#252A34',
        'subheading_color': '#444444',
      },
    },
  },
  plugins: [],
}

