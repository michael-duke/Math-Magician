module.exports = {
  content: [
    './src/**/*.{html,js}',
    './node_modules/tw-elements/dist/js/**/*.js',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans:['Raleway', 'sans-serif'],                    
        stange: ['Stange', 'sans-serif'],
        nunito: ['nunito', 'sans-serif'],
        montserrat: ['Montserrat', 'sans-serif']
      },
      fontSize: {
        'zl':'2rem'
      },
      screens: {
        sm: { max: '768px' },
        sl: { max: '500px' },
        ms: { max: '1212px' },
      },
      boxShadow: {
        'calcShadow': '0 1px 6px 0 rgba(0, 0, 0, 0.38)',
      },
      colors: {
        'magic-blue': '#137dc5',
      },
    },
  },
  plugins: [require('tw-elements/dist/plugin')],
};
