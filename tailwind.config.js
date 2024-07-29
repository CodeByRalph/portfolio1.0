const { transform } = require('next/dist/build/swc');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        "navy-blue": '#003459',
        "lavender-blush": "#EEE5E9",
        "saffron": "#F8C630"
      },
      keyframes: {
        slidein: {
          from: {
            opacity: 0,
            transform: "translateY(-10px)",
          },
          to: {
            opacity: 1,
            transform: "translateY(0)",
          },
        },
        appear: {
          from: {opacity: 0, transform: "translateY(20px)"},
          to: {opacity: 1, transform: "translateY(0)"}
        }
      },
      animation: {
        slidein: "slidein 1s ease var(--slidein-delay, 0) forwards",
        appear: "appear 1s ease var(--appear-delay,0) forwards",
      },
    },
  },
  plugins: [],
};
