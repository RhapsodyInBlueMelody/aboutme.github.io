/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}", // adjust if your project structure is different
  ],
  theme: {
    extend: {
      fontFamily: {
        mono: ['"Fira Mono"', "Menlo", "Monaco", "monospace"],
      },
      colors: {
        gruvbox: {
          dark: "#282828",
          light: "#fbf1c7",
          yellow: "#fabd2f",
          green: "#b8bb26",
          orange: "#fe8019",
          faded: "#ebdbb2",
          gray: "#928374",
          border: "#665c54",
          red: "#cc241d",
        },
      },
      boxShadow: {
        "gruv-yellow": "0 0 18px #fabd2f",
        "gruv-green": "0 0 18px #b8bb26",
      },
    },
  },
  plugins: [],
};
