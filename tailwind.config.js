/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        clinic: {
          navy: '#082852',
          'navy-dark': '#061C39',
          'navy-light': '#0E3A75',
          green: '#268054',
          'green-dark': '#1C6944',
          'green-light': '#329965',
          mint: '#EDF8F2',
          pale: '#F4F8FC',
          line: '#DEE8F0',
          ink: '#0D233F',
          muted: '#5C718A',
        }
      },
      fontFamily: {
        sans: ['Inter', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif']
      },
      boxShadow: {
        soft: '0 4px 20px -2px rgba(8, 40, 82, 0.06)',
        card: '0 10px 30px -4px rgba(8, 40, 82, 0.12)',
        float: '0 14px 34px -4px rgba(8, 40, 82, 0.09)'
      }
    }
  },
  plugins: []
}