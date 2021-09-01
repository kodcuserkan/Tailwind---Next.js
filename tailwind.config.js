module.exports = {
  mode: "jit",
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      screens: {
        'sm': '480px',
        'md': '547px',
        'lg': '768px',
        'xl': '1024px',
        '2xl': '1680px'
      },
      colors: {
        primary: "#ff4800",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
