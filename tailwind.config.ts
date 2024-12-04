import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        bgColor: "#fff8e8",
        orange1:"#d4711a",
        bgGray:"#fdf9f0",
        darkBrown:"#42210B",
        background: "var(--background)",
        foreground: "var(--foreground)",

      },
      fontFamily: { 
        sans: ['"Helvetica Neue"', 'Arial', 'sans-serif'],
      },
      
    },
  },
  plugins: [],
} satisfies Config;





