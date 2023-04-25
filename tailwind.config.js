/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html'],
  theme: {
   
    extend: {
      
      colors: {
        veryLightGrayishBlue: `hsl(var(--veryLightGrayishBlue), <alpha-value>)`,
        lightGrayishBlue: 'hsl(var(--lightGrayishBlue), <alpha-value>)',
        grayishBlue: 'hsl(var(--grayishBlue), <alpha-value>)',
        darkGrayishBlue: 'hsl(var(--darkGrayishBlue), <alpha-value>)',
        gradientStart: 'hsl(var(--gradientStart), <alpha-value>)',
        gradientEnd: 'hsl(var(--gradientEnd), <alpha-value>)',
      },

    },
 
  },
  plugins: [],
};
