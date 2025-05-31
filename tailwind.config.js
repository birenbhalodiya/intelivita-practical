
/** @type {import('tailwindcss').Config} */
module.exports = {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./components/**/*.{js,ts,jsx,tsx,mdx}",
		"./app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		container: {
			center: true,
			padding: "2rem",
			screens: {
				"2xl": "1280px",
			},
		},
		extend: {
			colors: {
				primary: "#E7FAFE",
				secondary: "#ff7967",
				black: "#000000",
				text: "#00000099",
				white: "#ffffff",
				border: "#0000001A",
				bg: "#F5F5F5",
			},
			
		},
	},
	plugins: [require("tailwindcss-animate")],
};
