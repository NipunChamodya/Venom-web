module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    fontFamily: {
      primary: 'Hind Siliguri',
    },
    container: {
      padding: {
        DEFAULT: '1rem',
        lg: '30px',
      },
    },
    screens: {
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1170px',
    },
    extend: {
      colors: {
        dark: '#292830',
        light: '#BDBDBD',
        accent: '#1C16B9',
        accentHover: '#8A7FD6',
        grey: '#F5F5F5',
      },
      backgroundImage: {
        overview: "url('src/assets/videos/Hero/vv_1.mp4)",
        cta: "url('/src/assets/img/cta/bg.svg')",
      },
    },
  },
  plugins: [],
};
