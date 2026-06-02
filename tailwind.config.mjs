/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        background: '#0B0C10',
        surface: '#1F2833',
        accent: '#66FCF1',
        'accent-dim': '#45A29E',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      transitionTimingFunction: {
        'ease-spring': 'cubic-bezier(0.175, 0.885, 0.32, 1.275)',
      },
    },
  },
  plugins: [],
}
