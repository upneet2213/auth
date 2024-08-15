import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      backgroundColor: {
        'dark-1': '#27292D',
        'dark-2': '#191920',
        'dark-3': '#7F8084',
        'button-primary': '#4A96FF',
      },
      textColor: {
        'dark-1': '#FFFFFF',
        'dark-2': '#6B6C70',
        'dark-3': '#C5C7CA',
        'dark-4': '#7F8084',
      },
      borderColor: {
        'dark-1': '#35373B',
      },
    },
  },
  plugins: [],
};
export default config;
