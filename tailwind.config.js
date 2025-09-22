/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html"
  ],
  theme: {
    extend: {
      colors: {
        // Cores Primárias
        'primary-dark': '#31281d',     // Marrom dessaturado escuro
        'primary-orange': '#cf9653',   // Laranja suave
        'primary-light': '#f3f2ef',    // Neutro claro
        
        // Cores Secundárias e de Acento
        'secondary-brown': '#594329',  // Marrom profundo
        'accent-orange-1': '#ca8f46',  // Tom de laranja 1
        'accent-orange-2': '#c38942',  // Tom de laranja 2
        'accent-yellow': '#d5bd4b',    // Amarelo suave
        
        // Tons Neutros
        'text-primary': '#2d2d2d',     // Cinza escuro
        'text-secondary': '#434343',   // Cinza médio
        
        // Variações customizadas
        'vertex': {
          50: '#faf9f7',
          100: '#f3f2ef',
          200: '#e8e5e0',
          300: '#d5bd4b',
          400: '#cf9653',
          500: '#ca8f46',
          600: '#c38942',
          700: '#594329',
          800: '#31281d',
          900: '#1a1510',
        },
        'vertex-gold': '#f59e0b',
        'vertex-dark': '#1a1510'
      },
      fontFamily: {
        'sans': ['Inter', 'system-ui', 'sans-serif'],
        'display': ['Poppins', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        'hero': ['3.5rem', { lineHeight: '1.1', fontWeight: '700' }],
        'section': ['2.5rem', { lineHeight: '1.2', fontWeight: '600' }],
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
        '128': '32rem',
      },
      boxShadow: {
        'vertex': '0 10px 25px -5px rgba(49, 40, 29, 0.1), 0 4px 6px -2px rgba(49, 40, 29, 0.05)',
        'vertex-lg': '0 20px 40px -10px rgba(49, 40, 29, 0.15), 0 8px 16px -4px rgba(49, 40, 29, 0.1)',
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-in-out',
        'slide-up': 'slideUp 0.8s ease-out',
        'bounce-gentle': 'bounceGentle 2s infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(40px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        bounceGentle: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
    },
  },
  plugins: [],
}