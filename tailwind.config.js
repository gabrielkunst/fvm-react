/** @type {import('tailwindcss').Config} */
export default {
	content: ["./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			colors: {
				"white-custom": "#ffffff",
				"black-custom": "#000000",
				"text-white": "#ffffff",
				"text-black": "#000000",
				"text-gray": "#999999",
				primary: "#2552a7",
				secondary: "#4480ef",
				"neutral-100": "#f5f6f7",
				"neutral-200": "#e7e7e7",
				"neutral-300": "#3c4453",
			},
			gridTemplateColumns: {
				responsive: "repeat(auto-fit, minmax(250px, auto))",
			},
		},
	},
	plugins: [],
};
