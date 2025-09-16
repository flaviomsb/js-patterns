import { defineConfig } from 'eslint/config';
import eslint from '@eslint/js';
import tseslint from 'typescript-eslint';
import jestEslint from 'eslint-plugin-jest';
import globals from 'globals';

export default defineConfig(
  eslint.configs.recommended,
  tseslint.configs.recommended,
  {
    // enable jest rules on test files
    files: ['**/*.test.{js,ts}'],
    extends: [jestEslint.configs['flat/recommended']],
    rules: {
      'jest/no-focused-tests': 'warn',
    },
  },
  {
    languageOptions: {
      globals: {
        ...globals.node,
      },
    },
    rules: {
      'consistent-return': 1,
      'no-console': 'off',
      'no-restricted-syntax': 'off',
      'no-plusplus': 'off',
      'no-const-assign': 'error',
      'prefer-const': 'error',
      'no-unused-vars': 'off',
      '@typescript-eslint/no-explicit-any': 'off',
      '@typescript-eslint/ban-ts-comment': 'off',
      '@typescript-eslint/no-unused-vars': [
        'error',
        {
          args: 'all',
          argsIgnorePattern: '^_',
          caughtErrors: 'all',
          caughtErrorsIgnorePattern: '^_',
          destructuredArrayIgnorePattern: '^_',
          varsIgnorePattern: '^_',
          ignoreRestSiblings: true,
        }
      ],
    },
  },
);
