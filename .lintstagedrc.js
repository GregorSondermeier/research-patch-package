module.exports = {
  '*.css': 'stylelint',
  '*.{js,jsx,json,ts,tsx}': 'eslint',
  '*.{ts,tsx}': () => 'npm run check-types',
};
