const defaultTheme = require('tailwindcss/defaultTheme')


/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	darkMode: "class",
	theme: {
		extend: {
			colors: {
			'shark': {
				'50': 'hsl(240, 20%, 97%)',
				'100': 'hsl(240, 12%, 94%)',
				'200': 'hsl(233, 13%, 86%)',
				'300': 'hsl(233, 13%, 74%)',
				'400': 'hsl(235, 13%, 60%)',
				'500': 'hsl(234, 12%, 48%)',
				'600': 'hsl(236, 13%, 39%)',
				'700': 'hsl(237, 13%, 32%)',
				'800': 'hsl(236, 11%, 27%)',
				'900': 'hsl(236, 11%, 24%)',
				'950': 'hsl(240, 11%, 11%)',
			},
			'tag': '#96bafa',
			'accent': 'hsl(225deg, 88%, 68%)',

    		},
			boxShadow: {
				accent: [
					"0 0px 10px hsl(225deg, 88%, 68%)",
				],
			},
			typography:  (theme) => ({
				DEFAULT: {
					css: {
					  'code::before': {
						content: '""'
					  },
					  'code::after': {
						content: '""'
					  },
					  h1: {
						marginBottom: 0,
					  },
            code: {
              color: theme('colors.slate.500'),
            //   backgroundColor: theme('colors.stone.100'),
            //   borderRadius: theme('borderRadius.DEFAULT'),
            //   paddingLeft: theme('spacing[1.5]'),
            //   paddingRight: theme('spacing[1.5]'),
            //   paddingTop: theme('spacing.1'),
            //   paddingBottom: theme('spacing.1'),
            }
					},
				},
			}),
		},
	},
	plugins: [
		require('@tailwindcss/typography'),
	],

}
