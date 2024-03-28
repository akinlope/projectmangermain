/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        "sm": { "max": "499.98px" },
      "md": { "min": "500px", "max": "991.98px" },
      "lg": { "min": "992px" }
      }
    },
  },
  plugins: [],
}

