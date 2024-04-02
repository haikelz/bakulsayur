/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        darkCharcoal: "#303030",
        royalGreen: "#0E6000",
        yellowGreenColorWheel: "#35A223",
        yellowGreen: "#9BD73C",
        platinum: "#E6E6E6",
        cultured: "#F5F5F5",
        palmLeaf: "#75A22F",
        appleGreen: "#8EC000",
        lightSilver: "#D9D9D9",
        blackOlive: "#404040",
        isabeline: "#F1F4EA",
        bitterLime: "#BDFF00",
      },
      fontSize: {
        extraLarge: "64px",
        large: "48px",
        medium: "32px",
        semiMedium: "24px",
        normal: "20px",
        small: "14px",
        tiny: "12px",
      },
      boxShadow: {
        innerInput: "4px 4px 4px 0px rgba(0,0,0,0.25) inset",
        card: "0px 4px 4px 0px rgba(0, 0, 0, 0.50)",
      },
    },
    backgroundImage: {
      "hero-home": "url('/images/hero-home.png')",
      "hero-tentang": "url('/images/hero-tentang.png')",
      "hero-profile": "url('/images/hero-profile.png')",
      "banner-belanja": "url('/images/banner-belanja.png')",
    },
  },
  plugins: [],
};
