/** @type {import('tailwindcss').Config} */
export default {
	content: ["./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			colors: {
				"custom-white": "#ffffff",
				"custom-black": "#000000",
				"custom-gray": "#999999",
				primary: "#2552a7",
				secondary: "#4480ef",
				"neutral-100": "#f5f6f7",
				"neutral-200": "#e7e7e7",
				"neutral-300": "#3c4453",
			},
			gridTemplateColumns: {
				responsive: "repeat(auto-fit, minmax(250px, auto))",
			},
			screens: {
				xs: "425px",
				"3xl": "2000px",
			},
			keyframes: {
				"fade-down": {
					"0%": {
						opacity: "0",
						transform: "translateY(-10px)",
					},
					"100%": {
						opacity: "1",
						transform: "translateY(0)",
					},
				},
				"fade-in": {
					"0%": {
						opacity: "0",
					},
					"100%": {
						opacity: "1",
					},
				},
			},
			animation: {
				"fade-down": "fade-down 0.5s ease-out",
				"fade-in": "fade-in 0.5s ease-out",
			},
		},
	},
	plugins: [],
};
