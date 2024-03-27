/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        "sm": "150px",
        "md": "747px",
        "lg": "1024px"
      }
    },
  },
  plugins: [],
}

