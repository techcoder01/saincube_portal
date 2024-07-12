/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './templates/**/*.html',
    './static/js/**/*.js',
  ],
  theme: {
    extend: {
      container: {
        padding: "2rem",
        center: true,
      }
    },
  },
  plugins: [],
}

