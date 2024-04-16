/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        Inter: ["Inter, sans-serif"],
      },
      screens: {
        "2xl": { max: "1535px" },
        // => @media (max-width: 1535px) { ... }

        xl: { max: "1279px" },
        // => @media (max-width: 1279px) { ... }

        lg: { max: "1023px" },
        // => @media (max-width: 1023px) { ... }

        md: { max: "890px" },
        h: { max: "950px" },
        // => @media (max-width: 767px) { ... }

        sm: { max: "540px" },
        // => @media (max-width: 639px) { ... }
        lm: { min: "541px", max: "900px" },
        ls: { min: "900px", max: "936px" },
        t: { min: "541px", max: "626px" },
        t1: { min: "541px", max: "705px" },
      },
    },
  },
  plugins: [],
};
