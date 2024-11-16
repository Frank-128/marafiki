/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors:{
        redColor:"#6f0000",
        yellowColor:"#f8ac07",
        greenColor:"#011d08",
        deepGreenColor:"#011206",
      },
      backgroundImage: {
        'footer': "url('/footer.jpeg')",
      },
    },
  },
  plugins: [],
};
