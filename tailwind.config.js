/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        samu: ["Gentium Plus", "serif"] 
       } 
    },
  },
  plugins: [
    require('daisyui'),
  ],
}

