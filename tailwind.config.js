/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [ './src/**/*.jsx', './src/**/*.js' ],
  theme: {
	colors: {
		'pr-1': '#917FB3',
		'pr-2': '#0F6292',
		'pr-3': '#0F6292', // highlight color
		'pr-4': '#393E46',
		'pr-5': '#F0997D',
		'pr-6': '#EAFDFC', // text color
		'pr-7': '#7cc2ae',
		'pr-about': '#2B4865',
		'pr-project': '#874C62', // text color
		'pr-home': '#74959A',
	},
    extend: {
		fontFamily: {
			'press-start': ['"Press Start 2P"', 'cursive'],
			'maven-pro': ['"Maven Pro"', 'sans-serif'],
		},
		spacing: {
			'50-percent': '50%',
			'70-percent': '70%',
			'10-percent': '10%',
			'20-percent': '20%',
			'30-percent': '30%',
			'40-percent': '40%',
			'100-percent': '100%',
			'80-percent': '80%',
			'90px': '90px',
			'80screen': '80vh',
		},
		animation: {
			background: 'background ease infinite',
		  },
		  keyframes: {
			background: {
			  '0%, 100%': { backgroundPosition: '0% 50%' },
			  '50%': { backgroundPosition: '100% 50%' },
			},
		},
	},
  },
  plugins: [require("tw-elements/dist/plugin.cjs")],
}
