/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [ './src/**/*.jsx', './src/**/*.js' ],
  theme: {
	colors: {
		'pr-1': '#E27D60',
		'pr-2': '#93BFCF',
		'pr-3': '#0F6292',
		'pr-4': '#393E46',
		'pr-5': '#6096B4',
		'pr-6': '#EEEEEE',
		'pr-7': '#7cc2ae',
	},
    extend: {
		fontFamily: {
			'press-start': ['"Press Start 2P"', 'cursive'],
			'maven-pro': ['"Maven Pro"', 'sans-serif'],
		},
		spacing: {
			'50-percent': '50%',
			'10-percent': '10%',
			'20-percent': '20%',
			'30-percent': '30%',
			'40-percent': '40%',
		}
	},
  },
  plugins: [],
}
