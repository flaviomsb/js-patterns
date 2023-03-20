module.exports = {
  env: {
    jest: true,
    browser: true,
    es2021: true,
  },
  extends: [
    'airbnb-base',
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:import/recommended',
    'plugin:import/typescript',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ['@typescript-eslint'],
  rules: {
    'consistent-return': 1,
    'no-console': 0,
    'no-restricted-syntax': 0,
    'no-plusplus': 0,
    'import/extensions': ['error', {
      '.ts': 'never',
    }],
    'max-len': ['error', {
      code: 110,
      tabWidth: 2,
    }],
    '@typescript-eslint/no-explicit-any': 0,
  },
};
