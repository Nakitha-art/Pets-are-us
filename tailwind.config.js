module.exports = {
  mode: "jit",
  content: [
    "./src/**/**/*.{js,ts,jsx,tsx,html,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,html,mdx}",
  ],
  darkMode: "class",
  theme: {
    screens: { lg: "1024px", xl: "1281px", "2xl": "1441px", "3xl": "1729px" },
    extend: {
      colors: {
        black_900_7f: "#0000007f",
        black_900: "#000000",
        amber_600: "#ffb700",
        gray_900: "#222121",
        white_A700_72: "#ffffff72",
        white_A700: "#ffffff",
        gray_800_7f: "#3939397f",
        gray_100: "#f5f5f5",
      },
      borderRadius: { radius8: "8px", radius16: "16px" },
      fontFamily: { quicksand: "Quicksand" },
      backgroundImage: { gradient: "linear-gradient(180deg ,#222121,#000000)" },
      textShadow: { ts: "0px 4px  0px #000000" },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
