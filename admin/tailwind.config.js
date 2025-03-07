/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#857CEA",
        dark: "#282f53",
        neutral: "#F0F0F5",
        neutral2: "#424242",
        info: "#05C3FB",
        success: "#4ECC48",
        warning: "#EDEEF4",
        error: "#E82646",
      },
      fontFamily: {
        yekan: ['YekanBakh'],
      },
    },
  },
  plugins: [],
}

