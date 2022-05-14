module.exports = {
  content: [
    "./app.vue",
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
  ],
  theme: {
    fontFamily: {
      display: ["Roboto Slab", "system-ui", "sans-serif"],
      body: ["Radio Canada", "system-ui", "sans-serif"],
    },
    extend: {
      colors: {
        primary: {
          50: "#c8c1fe",
          100: "#beb7f4",
          200: "#b4adea",
          300: "#aaa3e0",
          400: "#a099d6",
          500: "#968fcc",
          600: "#8c85c2",
          700: "#827bb8",
          800: "#7871ae",
          900: "#6e67a4",
        },
        secondary: {
          50: "#aeefa7",
          100: "#a4e59d",
          200: "#9adb93",
          300: "#90d189",
          400: "#86c77f",
          500: "#7cbd75",
          600: "#72b36b",
          700: "#68a961",
          800: "#5e9f57",
          900: "#54954d",
        },
      },
    },
  },
  plugins: [],
}
