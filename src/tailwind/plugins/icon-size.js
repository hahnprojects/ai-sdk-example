const plugin = require('tailwindcss/plugin');

/**
 * This plugin generates classes for icon size like icon-md icon-xs...
 */
const iconSize = plugin(
  ({ addUtilities, theme, e, variants }) => {
    const values = theme('iconSize');

    addUtilities(
      Object.entries(values).map(([key, value]) => ({
        [`.${e(`icon-${key}`)}`]: {
          width: value,
          height: value,
          minWidth: value,
          minHeight: value,
          fontSize: value,
          lineHeight: value,
          [`svg`]: {
            width: value,
            height: value,
          },
        },
      })),
      variants('iconSize'),
    );
  },
  {
    theme: {
      iconSize: {
        xs: '1rem',
        sm: '1.25rem',
        md: '1.5rem',
        lg: '2rem',
        xl: '2.5rem',
        xxl: '4rem',
      },
    },
    variants: {
      iconSize: ['responsive'],
    },
  },
);

module.exports = iconSize;
