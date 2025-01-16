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
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: '#7B7D7D', // Steel Gray
        accent: '#0078D7',  // Electric Blue
        neutral: '#F0F0F0', // Light Gray
        highlight: '#C0C0C0', // Silver
        textColor: '#333333',    // Charcoal Black
      },
    },
  },
  plugins: [],
} satisfies Config;
