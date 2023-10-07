/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			fontFamily: {
				inter: "'Inter', sans-serif",
				caladea: "'Caladea', serif",
				roboto: "'Roboto', sans-serif",
			},
			colors: {
				primary: "#4D2C5E",
				secondary: "#FF7426 ",
				background: "#FDF8EE",
				"text-one": "#1D1D1D",
				hover: "#563168",
				shadow: "#553267",
			},
		},
	},
	plugins: [require("@tailwindcss/forms")],
};
