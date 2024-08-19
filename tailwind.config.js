/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        main: "#163a47",
        secondary: "#71c3cb",
        third: "#fac69d",
        // fourth: "#223255",
      },
      // keyframes: {
      //   grow: {
      //     "0%": { scale: 0 },
      //     "100%": { scale: 1 },
      //   },
      // },
      // animation: {
      //   grow: "grow 2s ease-in-out 1",
      // },
    },
  },
  plugins: [require("daisyui")],
};
