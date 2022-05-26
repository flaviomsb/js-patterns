module.exports = {
  env: {
    jest: true,
    browser: true,
    es2021: true,
  },
  extends: [
    'airbnb-base',
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  rules: {
    'consistent-return': 1,
    'no-console': 0,
    'no-restricted-syntax': 0,
    'no-plusplus': 0,
  },
};
