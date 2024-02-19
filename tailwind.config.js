/** @type {import('tailwindcss').Config} */
import plugin from 'tailwindcss/plugin'

export default {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {
			colors: {
				black: 'black',
				blue: '#2dd0ff',
				white: 'white',
				grey: 'grey',
				darkGrey: 'lightGray'
			},
			animation: {
				slideup: 'slideup 1s ease-in-out',
				slidedown: 'slidedown 1s ease-in-out',
				slideleft: 'slideleft 1s ease-in-out',
				slideright: 'slideright 1s ease-in-out',
				wave: 'wave 1.2s linear infinite',
				slowfade: 'slowfade 2.2s ease-in-out'
			},
			keyframes: {
				slowfade: {
					from: { opacity: 0 },
					to: { opacity: 1 }
				},
				slideup: {
					from: { opacity: 0, transform: 'translateY(25%)' },
					to: { opacity: 1, transform: 'none' }
				},
				slidedown: {
					from: { opacity: 0, transform: 'translateY(-25%)' },
					to: { opacity: 1, transform: 'none' }
				},
				slideleft: {
					from: { opacity: 0, transform: 'translateX(-20px)' },
					to: { opacity: 1, transform: 'translateX(0)' }
				},
				slideright: {
					from: { opacity: 0, transform: 'translateX(20px)' },
					to: { opacity: 1, transform: 'translateX(0)' }
				},
				wave: {
					'0%': { transform: 'scale(0)' },
					'50%': { transform: 'scale(1)' },
					'100%': { transform: 'scale(0)' }
				}
			},
      fontSize: {
        sm: '14px',
        base: '16px',
        xl: '18px'
      }
		}
	},
	plugins: [
		plugin(({ addUtilities }) => {
			addUtilities({
				'.outline-border-none': {
					outline: 'none',
					border: 'none'
				},

				'.flex-center-between': {
					display: 'flex',
					alignItems: 'center',
					justifyContent: 'space-between'
				},

				'.image-like-bg': {
					objectPosition: 'center',
					objectFit: 'cover',
					pointerEvents: 'none'
				}
			})
		})
	]
}
