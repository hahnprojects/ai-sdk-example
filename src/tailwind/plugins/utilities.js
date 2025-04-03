const plugin = require('tailwindcss/plugin');

const utilities = plugin(({ addComponents }) => {
  addComponents(
    {
      '.text-primary': {
        color: 'var(--color-text-primary)',
      },
      '.border-around-base': {
        'border-color': 'var(--color-border-around-base)',
      },
      '.text-secondary': {
        color: 'var(--color-text-secondary)',
      },
      '.text-hint': {
        color: 'var(--color-text-hint)',
      },
      '.text-accent': {
        color: 'var(--text-accent-color)',
      },
      '.text-warning': {
        color: 'var(--text-warn-color)',
      },
    },
    {
      variants: ['responsive', 'hover'],
    },
  );
});

module.exports = utilities;
