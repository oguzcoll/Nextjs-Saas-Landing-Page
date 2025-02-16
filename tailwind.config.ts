import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/sections/**/*.{js,ts,jsx,tsx,mdx}',
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    screens: {
      sm: '375px',
      md: '768px',
      lg: '1200px',
    },
    extend: {
      backgroundImage: {
        'hero-radial-bg':
          'radial-gradient(ellipse 200% 100% at bottom left, #183EC2, #EAEEFE 100%)',
      },
      container: {
        center: true,
        padding: {
          DEFAULT: '20px',
          lg: '80px',
        },
      },
      keyframes: {
        gradient: {
          '0%': { backgroundPosition: '0% center' },
          '100%': { backgroundPosition: '200% center' },
        },
      },
      animation: {
        gradient: 'gradient 6s linear infinite',
      },
    },
  },
  plugins: [],
};

export default config;
