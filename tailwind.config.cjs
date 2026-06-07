/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'sans-serif'],
        display: ['Inter', 'ui-sans-serif', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'sans-serif']
      },
      colors: {
        ink: '#0f172a',
        muted: '#475569',
        soft: '#f8fafc',
        line: '#e2e8f0',
        blueprint: '#1d4ed8',
        deep: '#0b1f3a',
        steel: '#64748b'
      },
      boxShadow: {
        'soft-xl': '0 24px 80px rgba(15, 23, 42, 0.08)'
      }
    }
  },
  plugins: []
};
