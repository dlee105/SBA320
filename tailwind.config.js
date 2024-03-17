const withMT = require("@material-tailwind/react/utils/withMT");

/** @type {import('tailwindcss').Config} */
export default withMT({
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      sm: { min: "500px", max: "767px" },
      // => @media (min-width: 640px and max-width: 767px) { ... }

      md: { min: "768px", max: "1023px" },
      // => @media (min-width: 768px and max-width: 1023px) { ... }

      lg: { min: "1024px" },
      // => @media (min-width: 1024px and max-width: 1279px) { ... }
    },
    extend: {
      colors: {
        "sp-green": "#1db954",
        "sp-card": "#212121",
        "sp-bg": "#121212",
        "sp-grey": "#282828",
        "sp-light-grey": "#3e3e3e",
      },
    },
  },
  plugins: [],
});
