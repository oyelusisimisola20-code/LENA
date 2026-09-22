import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: {
          DEFAULT: "#08080A",
          surface: "#111116",
          card: "#181820",
          elevated: "#22222D",
        },
        brand: {
          cyan: "#00F0FF",
          amber: "#FFB800",
          crimson: "#FF2A54",
          purple: "#A855F7",
        },
        dark: {
          950: "#08080A",
          900: "#111116",
          850: "#14141B",
          800: "#181820",
          700: "#242430",
          600: "#383848",
        },
        neutral: {
          primary: "#F4F4F6",
          secondary: "#9E9EA8",
          muted: "#636370",
        }
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "cyber-glow": "radial-gradient(circle at 50% 0%, rgba(0, 240, 255, 0.12), transparent 70%)",
        "amber-glow": "radial-gradient(circle at 50% 100%, rgba(255, 184, 0, 0.08), transparent 70%)",
      },
      animation: {
        "pulse-slow": "pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        "float": "float 6s ease-in-out infinite",
        "glow": "glow 2s ease-in-out infinite alternate",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-8px)" },
        },
        glow: {
          "0%": { opacity: "0.4" },
          "100%": { opacity: "0.8" },
        }
      }
    },
  },
  plugins: [],
};
export default config;
