let theme = require("tailwindcss/stubs/simpleConfig.stub");

module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
        screens: {
            xs: '360px'
        }
    },
  },
  plugins: [],
}
