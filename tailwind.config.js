/** @type {import('tailwindcss').Config} */
import daisyui from "daisyui"

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'selector',
  theme: {
    extend: {},
    container: {
      center: true,
      padding:'.5rem'
      
    },
  },
  plugins: [daisyui,],
}

