/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: { default: "1441px" },
      colors: {
        primary: "#3490dc", // Define your primary color
        secondary: "#ffed4a", // Define your secondary color
        // Add more custom colors as needed
      },
    },
  },
  plugins: [],
};
