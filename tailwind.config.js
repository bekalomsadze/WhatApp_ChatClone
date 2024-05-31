/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode:'class',
  theme: {
    screens: {
      // '10xl': {'max': '30000px'},
      '2xl': {'max': '1635px'},
      'xl': {'max': '1279px'},
      'lg': {'max': '1023px'},
      'md': {'max': '767px'},
      'sm': {'max': '639px'},
      'Xsm': {'max': '349px'},
    },

    extend: {
      fontFamily: {
        roboto: ["Roboto", "sans-serif"],
      },
      colors: {
        headerBg: "#FFFFFF",
        chatBg: "#F7F7F7",
        yourContentColor: "#F2F2F2",
        downErrow: "#615B5B",
        frameColors: "#E1E1E1",
        maincommonColor: "#615B5B",
        yellow: "#FFE769",
        // dark
        darkHeadInput: "#4B4646",
        darkcommon: "#302C2C",
        whiteletters: "#FFFFFF",
        darkCommon: "#302C2C",
        darkYellow: "#FFE769",
        darkbuttonheart: "#615B5B",
      },
    },
  },
  plugins: [
    require("tailwindcss"),
    require("autoprefixer"),
    require("tailwind-scrollbar"),
  ],
};
