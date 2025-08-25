/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#00D4AA',
          dark: '#00B894',
          light: '#00E6B8',
        },
        secondary: {
          DEFAULT: '#FF6B6B',
          dark: '#FF5252',
          light: '#FF8A80',
        },
        background: {
          primary: '#1E1E1E',
          secondary: '#2D2D2D',
        },
        text: {
          primary: '#FFFFFF',
          secondary: '#B0B0B0',
        },
        border: '#404040',
        success: '#4CAF50',
        error: '#F44336',
        warning: '#FF9800',
      },
      fontFamily: {
        sans: ['Inter', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
      },
      fontSize: {
        xs: '12px',
        sm: '14px',
        md: '16px',
        lg: '18px',
        xl: '20px',
        '2xl': '24px',
      },
      fontWeight: {
        normal: 400,
        medium: 500,
        semibold: 600,
        bold: 700,
      },
      spacing: {
        xs: '4px',
        sm: '8px',
        md: '16px',
        lg: '24px',
        xl: '32px',
        '2xl': '48px',
      },
      borderRadius: {
        sm: '4px',
        md: '8px',
        lg: '12px',
        xl: '16px',
      },
      boxShadow: {
        sm: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
        md: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
        lg: '0 10px 15px -3px rgba(0, 0, 0, 0.1)',
        xl: '0 20px 25px -5px rgba(0, 0, 0, 0.1)',
      },
      animation: {
        'pulse-shimmer': 'pulse-shimmer 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'checkmark-bounce': 'checkmark-bounce 0.6s ease-in-out',
        'shake-highlight': 'shake-highlight 0.5s ease-in-out',
        'rocket-launch': 'rocket-launch 1s ease-out',
        'data-stream': 'data-stream 2s linear infinite',
        'folder-unfold': 'folder-unfold 0.3s ease-out',
        'text-highlight-morph': 'text-highlight-morph 0.3s ease-in-out',
        'gentle-scale-glow': 'gentle-scale-glow 0.2s ease-in-out',
      },
      keyframes: {
        'pulse-shimmer': {
          '0%, 100%': { opacity: 1 },
          '50%': { opacity: 0.5 },
        },
        'checkmark-bounce': {
          '0%': { transform: 'scale(0)' },
          '50%': { transform: 'scale(1.2)' },
          '100%': { transform: 'scale(1)' },
        },
        'shake-highlight': {
          '0%, 100%': { transform: 'translateX(0)' },
          '25%': { transform: 'translateX(-5px)' },
          '75%': { transform: 'translateX(5px)' },
        },
        'rocket-launch': {
          '0%': { transform: 'translateY(0) scale(1)' },
          '50%': { transform: 'translateY(-20px) scale(1.1)' },
          '100%': { transform: 'translateY(-40px) scale(0.8)' },
        },
        'data-stream': {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(100%)' },
        },
        'folder-unfold': {
          '0%': { transform: 'rotateX(-90deg)', opacity: 0 },
          '100%': { transform: 'rotateX(0deg)', opacity: 1 },
        },
        'text-highlight-morph': {
          '0%': { backgroundColor: 'transparent' },
          '50%': { backgroundColor: 'rgba(0, 212, 170, 0.2)' },
          '100%': { backgroundColor: 'transparent' },
        },
        'gentle-scale-glow': {
          '0%': { transform: 'scale(1)', boxShadow: '0 0 0 0 rgba(0, 212, 170, 0)' },
          '100%': { transform: 'scale(1.05)', boxShadow: '0 0 0 10px rgba(0, 212, 170, 0)' },
        },
      },
    },
  },
  plugins: [],
}

