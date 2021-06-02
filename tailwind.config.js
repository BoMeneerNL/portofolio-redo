module.exports = {
  purge: {
    enabled: false,
    content: ['./scripts/php/*.php', './*.php'],
    options: {
      keyframes: true,
    },
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
