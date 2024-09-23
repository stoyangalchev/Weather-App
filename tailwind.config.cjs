module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      animation: {
        "spin-slow": "spin 6s linear infinite", 
      },
      colors: {
        cardGray: "#D0D0D0",
        blurple: "#362f5d",

        darkBlue: "#0c012c",
        lightBlue: "#87CEEB",
      },
    },
  },
  plugins: [],
};
