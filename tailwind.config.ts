import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      backgroundImage:{
        Street: "url('https://img.daisyui.com/images/stock/photo-1507358522600-9f71e620c44e.webp')"
      }
    },
  },
  plugins: [
    require('daisyui'),
  ],
  daisyui: {
    themes: ["coffee", "cupcake",  "cmyk"],
  },
} satisfies Config;
