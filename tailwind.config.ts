import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Custom color system from globals.css
        bg: {
          primary: 'var(--bg-primary)',
          secondary: 'var(--bg-secondary)',
        },
        text: {
          primary: 'var(--text-primary)',
          secondary: 'var(--text-secondary)',
          tertiary: 'var(--text-tertiary)',
        },
        border: 'var(--border)',
        accent: 'var(--accent)',
      },
      fontFamily: {
        sans: ['var(--font-lora)', 'serif'],
        serif: ['var(--font-lora)', 'serif'],
        mono: ['var(--font-geist-mono)', 'monospace'],
      },
      fontSize: {
        // Adjusted sizes for better readability
        xs: ['0.8125rem', { lineHeight: '1.7' }], // 13px
        sm: ['0.875rem', { lineHeight: '1.65' }], // 14px
        base: ['0.9375rem', { lineHeight: '1.65' }], // 15px (increased from 13px)
      },
      maxWidth: {
        'content': '680px',
      },
      spacing: {
        'section': '4rem', // 64px for consistent section spacing
      },
    },
  },
  plugins: [],
};

export default config;
