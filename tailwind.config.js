/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}"],
  theme: {
    extend: {
      width: {
        600: "1300px",
        1400: "1400px",
        500: "550px",
        400: "480px",
        25: "40px",
      },
      height: {
        560: "600px",
        530: "560px",
        0.2: "3px",
        85: "85%",
        400: "500px",
        300: "350px",
        25: "40px",
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        open_sans: ["Open Sans", "sans-serif"],
        pt_serif: ["PT Serif", "serif"],
      },

      flexBasis: {
        "1/14": "32%",
      },

      backgroundSize: {
        100: "100% 200%",
      },

      backgroundPosition: {
        main: "0 2.5%",
        full: "0 100%",
      },
      colors: {
        "main-orange": "rgba(245, 136, 0, 1)",
        "start-orange": "rgba(245, 136, 0, 0.4)",
        "main-white": "rgb(255 255 255)",
        "main-gradient-black": "rgba(0, 0,0, 0.6)",
        "main-black": "rgba(0, 0,0, 0.7)",
        "main-background": "rgba(242, 242, 242, 1)",
        "main-change-background": "rgba(251, 249, 241, 0.6)",
        "main-color": "rgba(226, 0, 0, 0.6) ",
        "main-yellow": "#FCE700",
      },
    },
  },
  plugins: [],
};
