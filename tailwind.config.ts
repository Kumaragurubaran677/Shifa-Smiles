import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'custom-gradient': 'linear-gradient(90deg, rgba(255, 255, 255, 0) 0%, #FFDCE8 12.38%, #F0C2C8 24.75%, #F0C2C8 49.5%, #F0C2C8 74.75%, #FFDCE8 87.37%, rgba(255, 255, 255, 0) 100%)',
      },
      fontFamily: {
        caramello: ['Caramello', 'sans-serif'],
      },

    },
  },
  plugins: [],
} satisfies Config;
