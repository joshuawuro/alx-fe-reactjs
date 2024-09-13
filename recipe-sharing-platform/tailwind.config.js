/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false,
  theme: {
    extend: {
      screens: {
        mobile: "106px",
        //=> @media (min-width: 567px){...}
        tablet: "567px",
        //=> @media (min-width: 960px) {...}
        laptop: "992px",
        //=> @media (min-width: 1024px) {...}
        desktop: "1200px",
        //=> @media (min-width: 1440px) {...}
      },
    },
  },
  plugins: [],
};
