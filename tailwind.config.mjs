/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "node_modules/preline/dist/*.js"
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      maxWidth: {
        "8xl": "88rem",    // 1408px
        "9xl": "96rem",    // 1536px
        "10xl": "104rem",  // 1664px
      },
    },
  },
  plugins: [
    // require('@tailwindcss/forms'),
    require('preline/plugin'),
  ],
};
