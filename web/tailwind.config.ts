import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        primary: '#219A93',
        link: '#009DB3',
        info: '#5E8AD7',
        success: '#7FD134',
        warning: '#F9F871',
        danger: '#FF90A7',
        'green-text': 'rgba(33,154,147,1)',
        'green-background': 'rgba(33,154,147,0.1)',
      },
      fontFamily: {
        overlock: ['Overlock', 'cursive'],
      },
    },
  },
  plugins: [],
};
export default config;
