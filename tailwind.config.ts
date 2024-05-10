import type {Config} from "tailwindcss";

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
                primary: '#FE4A22',
                secondary: '#FFD025',
                menu: '#252525'
            }, fontFamily: {
                urbanist: ['var(--font-urbanist)'],
            },
            fontSize: {
                big: '9rem',
                extra: '27rem',
            }
        },
    },
    plugins: [],
};
export default config;
