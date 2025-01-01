/** @type {import('tailwindcss').Config} */

export default {
  content: [
    "./src/**/*.{vue,html,js}",
    "./node_modules/flowbite/**/*.js",
    "./index.html"
  ],
  theme: {
    extend: {},
  },
  plugins: [
    require('flowbite/plugin')
  ],
}

