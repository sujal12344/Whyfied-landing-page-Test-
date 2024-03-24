/** @type {import('tailwindcss').Config} */

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      mb: { min: "300px", max: "500px" },
      // => @media (min-width: 300px and max-width: 500px) { ... } //between 300px to 500px

      mobileToLarge: { min: "300px" },
      // => @media (min-width: 300px) { ... } //from 300px to above

      sm: { min: "501px", max: "780px" },
      // => @media (min-width: 501 and max-width: 780px) { ... } //between 501px to 780px

      smToLarge: { min: "501px" },
      // => @media (min-width: 501px) { ... } //from 501px to above

      md: { min: "781px", max: "1023px" },
      // => @media (min-width: 781px and max-width: 1023px) { ... } //between 781px to 1023px

      mdToLarge: { min: "781px" },
      // => @media (min-width: 781px) { ... } //from 781px to above

      lg: { min: "1024px", max: "1279px" },
      // => @media (min-width: 1024px and max-width: 1279px) { ... } //between 1024px to 1279px

      lgToLarge: { min: "1024px" },
      // => @media (min-width: 1024px) { ... } //from 1024px to above

      xl: { min: "1280px", max: "1535px" },
      // => @media (min-width: 1280px and max-width: 1535px) { ... } //between 1280px to 1535px

      xlToLarge: { min: "1280px" },
      // => @media (min-width: 1280px) { ... } //from 1280px to above

      "2xl": { min: "1536px" },
      // => @media (min-width: 1536px) { ... } //from 1536px to above
    },
  },
  plugins: [],
};
