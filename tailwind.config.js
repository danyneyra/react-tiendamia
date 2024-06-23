/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage:{
        'bg-hero': "url('../public/hero_bg.png')",
      },
      transitionProperty: {
        'right': 'right',
      },
      transitionTimingFunction: {
        'ease': 'ease',
      },
      boxShadow: {
        '3xl': '0px -6px 10px 0px #8787871f',
      },
    },
  },
  plugins: [],
}