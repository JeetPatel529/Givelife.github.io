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
      boxShadow: {
        'shadow_regular': '0 10px 25px  rgba(37, 42, 52, 0.08)',
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
        'subheading_second_color': '#555555',
        'secondry_color': '#AFAFAF',
      },
    },
  },
  plugins: [],
}

