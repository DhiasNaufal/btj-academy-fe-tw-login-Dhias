/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#F28705",
          lighten: "#FEF3E6",
        },
        black: "#1C1C1C",
      },
      fontFamily: {
        sans: ["IBM Plex Sans", "sans-sherif"],
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
