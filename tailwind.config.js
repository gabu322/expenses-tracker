/** @type {import('tailwindcss').Config} */

// const plugin = require("tailwindcss/plugin");

module.exports = {
   content: [
      "./pages/**/*.{js,ts,jsx,tsx,mdx}",
      "./components/**/*.{js,ts,jsx,tsx,mdx}",
      "./app/**/*.{js,ts,jsx,tsx,mdx}",
   ],
   theme: {
      extend: {
         backgroundImage: {
            "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
            "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
         },
      },
   },
   plugins: [
      plugin(function ({ addUtilities }) {
         const newUtilities = {};

         for (let i = 1; i <= 20; i++) {
            newUtilities[`.flex-row-${i}`] = {
               display: "flex",
               flexDirection: "row",
               gap: `${i * 0.25}rem`,
            };
            newUtilities[`.flex-col-${i}`] = {
               display: "flex",
               flexDirection: "column",
               gap: `${i * 0.25}rem`,
            };
         }

         addUtilities(newUtilities, ["responsive"]);
      }),
   ],
};
