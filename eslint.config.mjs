import eslint from '@eslint/js';
import tseslint from 'typescript-eslint';
import globals from 'globals';

export default tseslint.config({
  ...eslint.configs.recommended,
  plugins: {
    '@typescript-eslint': tseslint.plugin,
  },
  languageOptions: {
    globals: {
      ...globals.browser,
    },
  },
  rules: {
    ...eslint.configs.recommended.rules,
    'consistent-return': 1,
    'no-console': 0,
    'no-restricted-syntax': 0,
    'no-plusplus': 0,
    'no-const-assign': 'error',
    'prefer-const': 'error',

    'max-len': [
      'error',
      {
        code: 110,
        tabWidth: 2,
      },
    ],

    '@typescript-eslint/no-explicit-any': 0,
    '@typescript-eslint/ban-ts-comment': 0,
  },
});
