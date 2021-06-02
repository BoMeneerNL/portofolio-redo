module.exports = {
  purge: {
    enabled: false,
    content: ['./scripts/phpstatic/*.php', './scripts/phpstatic/errors/*.php', './scripts/js/*.js', './*.php', './scripts/phpbg/*.php', './scripts/phpbg/sql-pdo/*.php'],
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
