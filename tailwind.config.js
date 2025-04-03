const path = require('path');
const colors = require('tailwindcss/colors');
const defaultTheme = require('tailwindcss/defaultTheme');

const config = {
  prefix: '',
  important: true,
  darkMode: ['selector', '[data-theme="hpc-dark"]'],
  content: [
    './**/*.{html,ts}',
    './node_modules/@hahnpro/ai-sdk/**/*.{html,js,mjs,ts,css,scss}'
  ],
  theme: {
    colors: {
      inherit: 'inherit',
      transparent: 'transparent',
      current: 'currentColor',
      black: colors.black,
      white: colors.white,
      gray: colors.slate,
      zinc: colors.zinc,
      slate: colors.slate,
      red: colors.red,
      amber: colors.amber,
      green: colors.emerald,
      yellow: colors.amber,
      blue: colors.blue,
      teal: colors.teal,
      base: {
        DEFAULT: 'var(--color-base)',
        900: 'var(--color-base-900)',
        800: 'var(--color-base-800)',
        700: 'var(--color-base-700)',
        600: 'var(--color-base-600)',
        500: 'var(--color-base-500)',
        400: 'var(--color-base-400)',
        300: 'var(--color-base-300)',
        200: 'var(--color-base-200)',
        100: 'var(--color-base-100)',
        50: 'var(--color-base-50)',
      },
      'on-base': 'var(--color-on-base)',
      surface: 'var(--color-surface)',
      'on-surface': 'var(--color-on-surface)',
      alternate: 'var(--color-alternate)',
      'alternate-lighter': 'var(--color-alternate-lighter)',
      active: 'var(--color-active)',
      'on-active': 'var(--color-on-active)',
      interactive: 'var(--color-interactive)',
      'on-interactive': 'var(--color-on-interactive)',
      disabled: 'var(--color-disabled)',
      info: 'var(--color-info)',
      'on-info': 'var(--color-on-info)',
      success: 'var(--color-success)',
      'on-success': 'var(--color-on-success)',
      warning: 'var(--color-warning)',
      'on-warning': 'var(--color-on-warning)',
      error: 'var(--color-error)',
      'on-error': 'var(--color-on-error)',
      hint: 'var(--color-hint)',
      highlight: 'rgb(var(--hpc-highlight-color) / <alpha-value>)',
    },
    screens: {
      xs: '0px',
      sm: '600px',
      md: '1024px',
      lg: '1440px',
      xl: '1920px',
      'lt-sm': { max: '599px' },
      'lt-md': { max: '1023px' },
    },
    extend: {
      flexGrow: {
        2: '2',
      },
      fontFamily: {
        sans: `"Lato", ${defaultTheme.fontFamily.sans.join(',')}`,
        mono: `"IBM Plex Mono", ${defaultTheme.fontFamily.mono.join(',')}`,
      },
      zIndex: {
        90: 90,
        100: 100,
        110: 110,
        120: 120,
      },
      // @tailwindcss/typography
      typography: (theme) => ({
        DEFAULT: {
          css: {
            color: 'var(--color-on-base)',
            a: {
              color: 'var(--color-text-primary)',
            },
            strong: {
              color: 'var(--color-on-base)',
            },
            'ol > li::before': {
              color: 'var(--color-on-alternate)',
            },
            'ul > li::before': {
              backgroundColor: 'var(--color-text-hint)',
            },
            hr: {
              borderColor: 'var(--color-border-around-base)',
            },
            blockquote: {
              color: 'var(--color-on-base)',
              borderLeftColor: 'var(--color-border-around-base)',
            },
            h1: {
              color: 'var(--color-on-base)',
            },
            h2: {
              color: 'var(--color-on-base)',
            },
            h3: {
              color: 'var(--color-on-base)',
            },
            h4: {
              color: 'var(--color-on-base)',
            },
            'figure figcaption': {
              color: 'var(--color-on-alternate)',
            },
            thead: {
              color: 'var(--color-on-base)',
              borderBottomColor: 'var(--color-border-around-base)',
            },
            'tbody tr': {
              borderBottomColor: 'var(--color-border-around-base)',
            },
          },
        },
        sm: {
          css: {
            table: {
              fontSize: '1em',
            },
          },
        },
      }),
    },
    fontSize: {
      xs: '.75rem',
      sm: '.875rem',
      md: '1rem',
      lg: '1.125rem',
      xl: '1.25rem',
      '2xl': '1.5rem',
      '3xl': '1.875rem',
      '4xl': '2.25rem',
      '5xl': '3rem',
      '6xl': '4rem',
      '7xl': '5rem',
    },
  },
  plugins: [
    require(path.resolve(__dirname, 'src/tailwind/plugins/utilities')),
    require(path.resolve(__dirname, 'src/tailwind/plugins/icon-size')),
    require('@tailwindcss/typography')({ modifiers: ['sm', 'lg'] }),
  ],
};

module.exports = config;
