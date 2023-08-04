const { nextui } = require('@nextui-org/react')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      keyframes: {
        ring: {
          '0%': { width: '10px', height: '10px', opacity: '1' },
          '100%': { width: '20px', height: '20px', opacity: '0' }
        }
      },
      animation: {
        ring: 'ring 1.5s infinite'
      }
    }
  },
  plugins: []
}
