// tailwind.config.js

const { comment } = require('postcss');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#5a5dff", // Brand color
        primaryHover: "#2D2F80", //Brand color hover
        black: "#000000",    // Black text
        grey: "#E6E6E6",    // Neutral grey
        error: "#dc2626",   // Error red
        success: "#16a34a", // Success green
        warning: "#d97706", // Warning orange
      },
      fontFamily: {
        manrope: ["Manrope", "sans-serif"], // For body + H1/H2
        noto: ["'Noto Sans Devanagari UI'", "sans-serif"], // For H3-H6
      },
      fontSize: {
        // Headings
        "h1": ["48px", { lineHeight: "120%" }],
        "h2": ["40px", { lineHeight: "120%" }],
        "h3": ["36px", { lineHeight: "120%" }],
        "h4": ["32px", { lineHeight: "120%" }],
        "h5": ["24px", { lineHeight: "120%" }],
        "h6": ["20px", { lineHeight: "120%" }],

        // Body text
        "body-lg": ["18px", { lineHeight: "136%" }],
        "body-base": ["16px", { lineHeight: "136%" }],
        "body-sm": ["14px", { lineHeight: "136%" }],
        "body-xs": ["13px", { lineHeight: "136%" }],

        // Buttons
        "btn-lg": ["18px", { lineHeight: "120%" }],
        "btn-base": ["16px", { lineHeight: "120%" }],
        "btn-sm": ["14px", { lineHeight: "120%" }],
      },
      fontWeight: {
        R: "400",  // Regular
        M: "500",  // Medium
        SB: "600", // SemiBold
        B: "700",  // Bold
        EB: "800", // ExtraBold
        Bk: "900", // Black
      },
    },
  },
  plugins: [],
};

//✅ Now we can use classes like:

// text-heading-1 font-B → Heading 1 Bold

// text-body-sm font-R → Small body text Regular

// text-btn-base font-SB → Base button text SemiBold