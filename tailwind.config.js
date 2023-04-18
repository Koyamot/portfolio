/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {},
    container: {
      center: true,
    },
  },
    // add daisyUI plugin
    plugins: [require("daisyui"), require('@tailwindcss/typography')],

    // daisyUI config (optional)
    daisyui: {
      styled: true,
      themes: ["pastel"],
      base: true,
      utils: true,
      logs: true,
      rtl: false,
      prefix: "",
      darkTheme: "dark",
    },
}