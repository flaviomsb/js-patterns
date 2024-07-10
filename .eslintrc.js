module.exports = {
  env: {
    jest: true,
    browser: true,
    es2021: true,
  },
  extends: [
    'airbnb-typescript/base',
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:import/recommended',
    'plugin:import/typescript',
    'plugin:deprecation/recommended',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: true,
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ['@typescript-eslint'],
  rules: {
    'consistent-return': 1,
    'no-console': 0,
    'no-restricted-syntax': 0,
    'no-plusplus': 0,
    'no-const-assign': 'error',
    'prefer-const': 'error',
    'import/extensions': ['error', {
      '.ts': 'never',
    }],
    'max-len': ['error', {
      code: 110,
      tabWidth: 2,
    }],
    '@typescript-eslint/no-explicit-any': 0,
    '@typescript-eslint/ban-ts-comment': 0,
  },
  ignorePatterns: [
    '.eslintrc.js',
    'babel.config.js',
    'jest.config.js',
  ],
};
