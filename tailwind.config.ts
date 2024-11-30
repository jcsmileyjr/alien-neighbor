import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: { 'spider-pattern': "url('/images/ceiling-spider.png')", },
      animation: {
        flash: 'flash 0.5s ease-in-out 3', // 2 flashes in 0.5 seconds
        ping: 'ping 1.5s cubic-bezier(0, 0, 0.2, 1) 3', // or set to infinite
        fadeOut: 'fadeOut 1.5s ease-out forwards',
        fadeOut2: 'fadeOut 2s ease-out forwards 3',
        fadeOut25: 'fadeOut 2.5s ease-out forwards 4',
        fadeOut3: 'fadeOut 3s ease-out forwards 2',
        fadeOut35: 'fadeOut 3.5s ease-out forwards 6',
        fadeOut4: 'fadeOut 4s ease-out forwards 5',
        fadeIn: 'fadeIn 2s ease-out forwards',
        fadeInSecond: 'fadeIn 3s ease-out forwards',
        moveUp: 'moveUp 2s ease-out forwards',
        scroll: 'scroll 3s linear infinite',
      },
      keyframes: {
        scroll: { '0%': { backgroundPosition: '0% 0%' }, '100%': { backgroundPosition: '100% 100%' }, },
        flash: {
          '0%, 100%': { opacity: '0.25' },
          '50%': { opacity: '1' },
        },
        ping: {
          '0%': { transform: 'scale(1)', opacity: '1' },
          '75%, 100%': { transform: 'scale(2)', opacity: '0' },
        },
        fadeOut: {
          '0%': { opacity: '1' },
          '100%': { opacity: '0', display: 'none' },
        },
        fadeIn: {
          '0%': { opacity: '0', display: 'none' },
          '50%': { opacity: '1' },
          '100%': { opacity: '0' },
        },
        moveUp: {
          '0%': { transform: 'translateY(100%)' },
          '100%': { transform: 'translateY(0)' },
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
