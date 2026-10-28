/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          dark: '#0A0B0D',
          charcoal: '#121418',
          card: '#181B22',
          surface: '#222630',
          border: 'rgba(255, 255, 255, 0.08)',
          gold: '#F59E0B',
          amber: '#EA580C',
          orange: '#F97316',
          light: '#F8F9FA',
          'light-subtle': '#EDEFF2'
        }
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'Inter', 'sans-serif'],
        display: ['"Plus Jakarta Sans"', 'sans-serif'],
        accent: ['Poppins', 'sans-serif']
      },
      backgroundImage: {
        'luminaire-gradient': 'linear-gradient(135deg, #F59E0B 0%, #EA580C 100%)',
        'luminaire-gradient-hover': 'linear-gradient(135deg, #EA580C 0%, #F59E0B 100%)',
        'hero-overlay': 'linear-gradient(180deg, rgba(10, 11, 13, 0.75) 0%, rgba(10, 11, 13, 0.85) 60%, #0A0B0D 100%)',
        'card-glow': 'radial-gradient(circle at 50% 0%, rgba(245, 158, 11, 0.15) 0%, transparent 70%)'
      },
      boxShadow: {
        'glow-gold': '0 0 25px rgba(245, 158, 11, 0.35)',
        'glow-amber': '0 0 35px rgba(234, 88, 12, 0.45)',
        'luxury': '0 20px 40px -15px rgba(0, 0, 0, 0.7)'
      }
    },
  },
  plugins: [],
}
