/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    // fontFamily: {
    //   kanit: ["Kanit", "sans-serif"],
    // },
    extend: {
      extend: {
        fontFamily: {
          kanit: ["Kanit", "sans-serif"],
        },
      },
    },
  },
  plugins: [],
};
