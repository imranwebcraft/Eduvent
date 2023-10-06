/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			fontFamily: {
				inter: "'Inter', sans-serif",
				caladea: "'Caladea', serif",
			},
			colors: {
				primary: "#4D2C5E",
				secondary: "#FF7426 ",
			},
		},
	},
	plugins: [],
};
