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
        'blueBlack': "#14213D",
        'spaceGold': "#FCA311",
        'offBlack': "#4A4A4A",
        'offGray': "#F2F2F2",
      },
    },
  },
  plugins: [],
} satisfies Config;
