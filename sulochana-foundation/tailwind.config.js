/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Peaceful Serene Emerald & Ocean Teal
        peace: {
          950: '#042f2e',
          900: '#134e4a',
          800: '#115e59',
          700: '#0f766e',
          600: '#0d9488',
          500: '#14b8a6',
          400: '#2dd4bf',
          300: '#5eead4',
          200: '#99f6e4',
          100: '#ccfbf1',
          50:  '#f0fdfa',
        },
        // Warm Gentle Gold / Saffron Amber
        sun: {
          950: '#451a03',
          900: '#78350f',
          800: '#92400e',
          700: '#b45309',
          600: '#d97706',
          500: '#f59e0b',
          400: '#fbbf24',
          300: '#fcd34d',
          200: '#fde68a',
          100: '#fef3c7',
          50:  '#fffbeb',
        },
        // Clean Soft Surface Whites & Creams
        surface: {
          DEFAULT: '#FFFFFF',
          50:  '#FAFCFB',
          100: '#F4F8F6',
          200: '#E9F1EE',
          300: '#DBE8E3',
        },
        // Slate Text Palette
        slateText: {
          900: '#0f172a',
          800: '#1e293b',
          700: '#334155',
          600: '#475569',
          500: '#64748b',
          400: '#94a3b8',
        }
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'Inter', 'system-ui', '-apple-system', 'BlinkMacSystemFont', '"Segoe UI"', 'Roboto', 'sans-serif'],
        heading: ['"Plus Jakarta Sans"', 'Inter', 'system-ui', '-apple-system', 'sans-serif'],
      },
      boxShadow: {
        'soft-card': '0 4px 20px -2px rgba(15, 118, 110, 0.06), 0 2px 6px -1px rgba(0, 0, 0, 0.04)',
        'soft-hover': '0 16px 32px -4px rgba(15, 118, 110, 0.12), 0 0 20px rgba(245, 158, 11, 0.15)',
        'sun-glow': '0 0 25px rgba(245, 158, 11, 0.35)',
        'peace-glow': '0 0 25px rgba(13, 148, 136, 0.25)',
      },
      animation: {
        'pulse-subtle': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float-slow': 'float 5s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-6px)' },
        }
      }
    },
  },
  plugins: [],
}
