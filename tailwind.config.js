/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        darkPurple: "#471ca8",
        lilac: "#884ab2",
        darkBlue: "#19283E",
        lightBlue: "#5AC3D3",
        cream: "#F2F9FA",
      },
      dropShadow: {
        icon: "0 0 5px rgba(255, 255, 255, 1)",
      },
      flexGrow: {
        7: "7",
      },
      transitionProperty: {
        flex: "flex",
      },
    },
  },
  plugins: [],
};
