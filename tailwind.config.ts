import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Extracted from assets/logo/logo.png
        primary: {
          DEFAULT: '#484894',
          dark: '#3D3B7A',
          light: '#5A58A8',
        },
        secondary: {
          DEFAULT: '#F46CA8',
          dark: '#E05594',
        },
        accent: {
          DEFAULT: '#F0C800',
          dark: '#D4B000',
        },
        gray: {
          light: '#F5F5F5',
          dark: '#757575',
          muted: '#A8A8A8',
        },
      },
      fontFamily: {
        inter: ['Inter', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Helvetica Neue', 'sans-serif'],
      },
      boxShadow: {
        soft: '0 4px 24px rgba(72, 72, 148, 0.08)',
        card: '0 8px 32px rgba(72, 72, 148, 0.12)',
        lifted: '0 16px 48px rgba(244, 108, 168, 0.15)',
      },
      animation: {
        'fade-in': 'fadeIn 0.8s ease-out',
        'slide-left': 'slideInLeft 0.8s ease-out',
        'slide-right': 'slideInRight 0.8s ease-out',
        'bounce-slow': 'bounce 2s infinite',
      },
      keyframes: {
        fadeIn: {
          from: { opacity: '0', transform: 'translateY(20px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
        slideInLeft: {
          from: { opacity: '0', transform: 'translateX(-50px)' },
          to: { opacity: '1', transform: 'translateX(0)' },
        },
        slideInRight: {
          from: { opacity: '0', transform: 'translateX(50px)' },
          to: { opacity: '1', transform: 'translateX(0)' },
        },
      },
    },
  },
  plugins: [],
}
export default config
