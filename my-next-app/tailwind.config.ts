export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    keyframes: {
      fadeIn: {
        from: { opacity: "0" },
        to: { opacity: "1" },
      },
      slideIn: {
        from: { transform: "translateX(-100%)" },
        to: { transform: "translateX(0)" },
      },
      scale: {
        from: { transform: "scale(0)" },
        to: { transform: "scale(1)" },
      },
      rotate: {
        from: { transform: "rotate(0deg)" },
        to: { transform: "rotate(360deg)" },
      },
    },
    animation: {
      fadeIn: "fadeIn 1s ease-in",
      slideIn: "slideIn 0.5s ease-out",
      scaleUp: "scale 0.3s ease-in-out",
      rotate: "rotate 2s linear infinite",
    },
  },
  plugins: [],
};
