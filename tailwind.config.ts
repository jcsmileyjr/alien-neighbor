import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      animation: {
        flash: 'flash 0.5s ease-in-out 3', // 2 flashes in 0.5 seconds
      },
      keyframes: {
        flash: {
          '0%, 100%': { opacity: '0.25' },
          '50%': { opacity: '1' },
        },
      },
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
