module.exports = {
  purge: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        blue: {
          purple: "hsl(246, 80%, 60%)",
          light: "hsl(195, 74%, 62%)",
          vary_dark: "hsl(226, 43%, 10%)",
          dark: "hsl(235, 46%, 20%)",
          desaturated_blue: "hsl(235, 45%, 61%)",
          pale_blue: "hsl(236, 100%, 87%)",
        },
        orange: "hsl(15, 100%, 70%)",
        red: "hsl(348, 100%, 68%)",
        green: "hsl(145, 58%, 55%)",
        violet: "hsl(264, 64%, 52%)",
        yellow: "hsl(43, 84%, 65%)",
      },
      fontFamily: {
        rubik: ['"Rubik"'],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
