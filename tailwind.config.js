/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#D32F2F',
          dark: '#B71C1C',
          light: '#EF5350',
        },
        accent: {
          DEFAULT: '#FDD835',
          dark: '#F9A825',
          light: '#FFEE58',
        },
        charcoal: {
          DEFAULT: '#1A1A1A',
          light: '#2D2D2D',
          lighter: '#3A3A3A',
        },
      },
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
        inter: ['Inter', 'sans-serif'],
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'bounce-slow': 'bounce 3s ease-in-out infinite',
        'pulse-ring': 'pulseRing 2s ease-out infinite',
        'flame-flicker': 'flameFlicker 3s ease-in-out infinite',
        'badge-pulse': 'badgePulse 2s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        pulseRing: {
          '0%': { transform: 'scale(0.8)', opacity: '1' },
          '100%': { transform: 'scale(2.4)', opacity: '0' },
        },
        flameFlicker: {
          '0%, 100%': { opacity: '1', transform: 'scaleY(1)' },
          '50%': { opacity: '0.8', transform: 'scaleY(1.1)' },
        },
        badgePulse: {
          '0%, 100%': { transform: 'scale(1)', boxShadow: '0 0 0 0 rgba(253, 216, 53, 0.7)' },
          '50%': { transform: 'scale(1.05)', boxShadow: '0 0 20px 10px rgba(253, 216, 53, 0)' },
        },
      },
    },
  },
  plugins: [],
}
