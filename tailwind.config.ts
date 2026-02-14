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
        'nato-dark': '#0B1120',
        'nato-bg': '#1A2332',
        'nato-surface': '#232F42',
        'nato-border': '#2E3A4F',
        'nato-accent': '#4A7BA7',
        'nato-text': '#E8EDF4',
        'nato-text-dim': '#A0AEC0',
      },
      fontFamily: {
        'sans': ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
export default config;
