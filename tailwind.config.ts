import { transform } from "next/dist/build/swc";
import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      xs: "475px",
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      xxl: "1536px",
    },
    extend: {
      colors: {
        dark: {
          DEFAULT: "#13294b",
        },
        light: {
          DEFAULT: "#ffffff",
        }
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      animation: {
        spotlight: "spotlight 2s ease .75s 1 forwards",
        popup: "popup 0.75s ease 1 forwards",
        gradient: "gradient 4s linear infinite",
      },
      keyframes: {
        spotlight: {
          "0%": {
            opacity: '0',
            transform: "translate(-72%, -62%) scale(0.5)",
          },
          "100%": {
            opacity: '1',
            transform: "translate(-50%,-40%) scale(1)",
          },
        },
        popup: {
          "0%": {
            opacity: '0',
            transform: "scale(0.75)",
          },
          "100%": {
            opacity: '1',
            transform: "scale(1)",
          },
        },
        gradient: {
          to: { 'background-position': '200% center' }
        },
      },
    },
  },
  plugins: [],
};
export default config;
