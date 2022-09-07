module.exports = {
  content: [
    './src/**/*.{html,js}',
    './node_modules/tw-elements/dist/js/**/*.js',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Raleway', 'sans-serif'],
        nunito: ['nunito', 'sans-serif'],
        montserrat: ['Montserrat', 'sans-serif'],
      },
      fontSize: {
        'zl':'1.65rem'
      },
      screens: {
        sm: { max: '768px' },
        ms: { max: '1212px' },
      },
      colors: {
        'magic-blue': '#137dc5',
      },
    },
  },
  plugins: [require('tw-elements/dist/plugin')],
};
