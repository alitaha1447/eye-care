const clinicColors = {
  // Primary Brand Blue (Buttons, Key Headings, Main Accents)
  primary: '#0C4092',
  primaryHover: '#093375',

  // Navigation Bar
  navText: '#696D73',
  navActive: '#0C4092',

  // Footer Section Colors
  footerBg: '#01244E',
  footerSocial: '#143F84',
  footerBottom: '#0D3A7D',

  // Before & After Badges
  badgeBefore: '#2F221B',
  badgeAfter: '#3C8037',

  // Clinic Brand Green & Mint
  green: '#268054',
  greenDark: '#1C6944',
  greenLight: '#329965',
  mint: '#EDF8F2',

  // Neutrals & Background Tints
  bgLight: '#EAF3FA',
  pale: '#F4F8FC',
  line: '#DEE8F0',
  ink: '#0D233F',
  muted: '#5C718A',
}

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        clinic: {
          navy: clinicColors.primary,
          'navy-dark': clinicColors.footerBg,
          'navy-light': clinicColors.primaryHover,
          green: clinicColors.green,
          'green-dark': clinicColors.greenDark,
          'green-light': clinicColors.greenLight,
          mint: clinicColors.mint,
          pale: clinicColors.pale,
          line: clinicColors.line,
          ink: clinicColors.ink,
          muted: clinicColors.muted,
          'nav-text': clinicColors.navText,
          'nav-active': clinicColors.navActive,
          'footer-bg': clinicColors.footerBg,
          'footer-social': clinicColors.footerSocial,
          'footer-bottom': clinicColors.footerBottom,
          'badge-before': clinicColors.badgeBefore,
          'badge-after': clinicColors.badgeAfter,
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