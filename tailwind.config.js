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
        // Brand Primary
        primary: { DEFAULT: '#0057A0', foreground: '#FFFFFF' },

        // FIXED BRAND COLOR (was missing before)
        deepNavy: '#1A3A52',

        // Brand Colors
        teal: '#009688',
        green: '#4CAF50',
        orange: '#FF9800',
        purple: '#673AB7',
        brown: '#795548',

        // Neutrals & Backgrounds
        background: '#E0F7FA',
        foreground: '#333333',
        graySoft: '#F2F2F2',

        // UI system
        border: '#E8E8E8',
        input: '#E8E8E8',
        ring: '#0057A0',

        muted: { DEFAULT: '#F2F2F2', foreground: '#333333' },
        accent: { DEFAULT: '#009688', foreground: '#FFFFFF' },
        destructive: { DEFAULT: '#ef4444', foreground: '#FFFFFF' },
      },

      fontFamily: {
        sans: ['Lato', 'sans-serif'],
        heading: ['Montserrat', 'sans-serif'],
        subheading: ['Poppins', 'sans-serif'],
        serif: ['Playfair Display', 'serif'],
      },

      borderRadius: {
        lg: '6px',
        md: '4px',
        sm: '2px',
        xl: '8px',
        '2xl': '10px',
        '3xl': '12px',
        full: '9999px',
      },

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