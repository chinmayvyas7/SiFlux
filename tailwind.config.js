/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx,html}"],
  theme: {
    extend: {
      fontFamily: {
        "dm-sans": ['"DM Sans"', "sans-serif"],
      },
      colors: {
        "custom-blue": "#10295A",
        "neutral-text-gray": "var(--Neutral-Colors-Text-Gray, #9795B5)",
      },
      backgroundImage: {
        "custom-overlay":
          "linear-gradient(180deg, rgba(2, 13, 34, 0.70) 0%, rgba(16, 41, 90, 0.22) 25%, rgba(16, 41, 90, 0.17) 71.15%, rgba(2, 13, 34, 0.70) 99.04%)",
      },
      height: {
        "custom-2510": "2510px",
      },
    },
  },
  plugins: [],
};
