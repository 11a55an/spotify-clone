/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      height: {
        '1/10': '10%', // Define your custom height
      },
    },
  },
  plugins: [],
}

