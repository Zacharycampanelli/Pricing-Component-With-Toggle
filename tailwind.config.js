/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html'],
  theme: {
    fontSize: {
      base: '0.938rem',
      h1: '2rem',
      h2: '1.125rem',
      pricing: '4.5rem',
      dollar: '2.5rem',
      button: '0.813rem'
    },
    extend: {
      colors: {
        veryLightGrayishBlue: `hsl(var(--veryLightGrayishBlue), <alpha-value>)`,
        lightGrayishBlue: 'hsl(var(--lightGrayishBlue), <alpha-value>)',
        grayishBlue: 'hsl(var(--grayishBlue), <alpha-value>)',
        darkGrayishBlue: 'hsl(var(--darkGrayishBlue), <alpha-value>)',
        gradientStart: 'hsl(var(--gradientStart), <alpha-value>)',
        gradientEnd: 'hsl(var(--gradientEnd), <alpha-value>)',
        backgroundWhite: 'hsl(var(--backgroundWhite), <alpha-value>)',
      },
    },
  },
  plugins: [],
};
