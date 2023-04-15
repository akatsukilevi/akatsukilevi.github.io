/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	daisyui: {
		themes: [
			{
				gruvbox: {
					"primary": "#689d6a",
					"secondary": "#b16286",
					"accent": "#d65d0e",
					"neutral": "#1d2021",
					"base-100": "#282828",
					"info": "#458588",
					"success": "#98971a",
					"warning": "#d79921",
					"error": "#cc241d",
				},
			},
		],
	},
	plugins: [require("@tailwindcss/typography"), require("daisyui")],
}
