/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        mountbattenpink: {
          50: '#E3D2DC',
          100: '#ffdefd',
          200: '#ffd4f3',
          300: '#fdcae9',
          400: '#f3c0df',
          500: '#e9b6d5',
          600: '#CAA7BC',
          700: '#AD7A99',
          800: '#925379',
          900: '#77365D',
        },
        columbiaBlue: {
          100: '#fbfdfe',
          200: '#ddebf3',
          300: '#DAF6FF',
          400: '#d0ecfc',
          500: '#c6e2f2',
          600: '#bcd8e8',
          700: '#B2CEDE',
          800: '#82A8BF',
          900: '#53819B',
        },
      },
      keyframes: {
        fall: {
          '0%': { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(100%)' },
        },
      },
      animation: {
        'spin-slow': 'spin 9s linear infinite',
      },
      animation: {
        'bounce-delay-1': 'bounce 1s infinite',
        'bounce-delay-2': 'bounce 1s 0.1s infinite',
        'bounce-delay-3': 'bounce 1s 0.2s infinite',
        'bounce-delay-4': 'bounce 1s 0.3s infinite',
        'bounce-delay-5': 'bounce 1s 0.4s infinite',
        'bounce-delay-6': 'bounce 1s 0.5s infinite',
        'bounce-delay-7': 'bounce 1s 0.6s infinite',
        'bounce-delay-8': 'bounce 1s 0.7s infinite',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      screens: {
      'xs': '400px',
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
    }
    },
  },
  plugins: [],
  darkMode: "class"
}
