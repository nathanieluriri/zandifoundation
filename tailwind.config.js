/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ['class'],
  content: [
    './pages/**/*.{js,jsx}',
    './components/**/*.{js,jsx}',
    './app/**/*.{js,jsx}',
    './src/**/*.{js,jsx}',
  ],
  theme: {
    container: {
      center: true,
      padding: '2rem',
      screens: {
        '2xl': '1400px',
      },
    },
    extend: {
      colors: {
        'deep-navy': '#1A3A52',
        'sage-green': '#6B8E7F',
        'warm-off-white': '#F9F9F7',
        'light-gray': '#F4F4F4',
        'dark-navy': '#1A1A1A',
        'border-gray': '#E8E8E8',
        border: '#E8E8E8',
        input: '#E8E8E8',
        ring: '#1A3A52',
        background: '#F9F9F7',
        foreground: '#1A1A1A',
        primary: {
          DEFAULT: '#1A3A52',
          foreground: '#FFFFFF',
        },
        secondary: {
          DEFAULT: '#6B8E7F',
          foreground: '#FFFFFF',
        },
        destructive: {
          DEFAULT: '#ef4444',
          foreground: '#FFFFFF',
        },
        muted: {
          DEFAULT: '#F4F4F4',
          foreground: '#1A1A1A',
        },
        accent: {
          DEFAULT: '#F4F4F4',
          foreground: '#1A3A52',
        },
      },
      fontFamily: {
        sans: ['Manrope', 'sans-serif'],
        serif: ['Fraunces', 'serif'],
      },
      borderRadius: {
        lg: '4px',
        md: '2px',
        sm: '1px',
        xl: '4px',
        '2xl': '4px',
        '3xl': '4px',
        full: '9999px',
      },
      // Remove default box shadows for flat design
      boxShadow: {
        sm: 'none',
        DEFAULT: 'none',
        md: 'none',
        lg: 'none',
        xl: 'none',
        '2xl': 'none',
        inner: 'none',
        none: 'none',
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
};
