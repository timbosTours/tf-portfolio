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
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
  darkMode: "class"
}
