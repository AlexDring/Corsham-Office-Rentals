module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    container: {
      screens: {
        sm: '640px',
        md: '768px',
        lg: '1024px',
        xl: '1280px',
      },
    },
    extend: {
      width: {
        '3/10': '30%',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
