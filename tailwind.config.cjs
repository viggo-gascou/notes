/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')

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
      
  
    },
			fontfamily: {
                'sans': ["'Atkinson Hyperlegible'", ...defaultTheme.fontFamily.sans],
            },
			boxShadow: {
				wglow: [
					"0 0px 20px rgba(255,255, 255, 0.35)",
					"0 0px 65px rgba(255, 255,255, 0.2)",
				  ],
				bglow: [
					"0 0px 20px rgba(0,0, 0, 0.35)",
					"0 0px 65px rgba(0, 0,0, 0.2)",
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
