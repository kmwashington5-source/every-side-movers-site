/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    extend: {
      colors: {
        gold: {
          400: '#d4af37',
          500: '#c8a437',
          600: '#b48e2f'
        }
      },
      boxShadow: {
        glow: '0 0 0 1px rgba(212,175,55,0.4), 0 10px 30px rgba(0,0,0,0.35)'
      }
    }
  },
  plugins: []
};
