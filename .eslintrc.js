module.exports = {
  env: {
    browser: false,
    es2021: false,
    es6: false,
    'jest/globals': false,
    node: false,
  },
  extends: [
    'eslint:recommended',
    'kentcdodds/best-practices',
    'kentcdodds/es6/possible-errors',
    'kentcdodds/import',
    'kentcdodds/jest',
    'kentcdodds/possible-errors',
    'plugin:jest-dom/recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:import/errors',
    'plugin:import/typescript',
    'plugin:prettier/recommended',
    'plugin:react/recommended',
    'plugin:react/jsx-runtime',
    'plugin:typescript-sort-keys/recommended',
  ],
  globals: {
    browser: false,
    chrome: false,
    phantom: false,
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: false,
    },
    ecmaVersion: 2018, // Allows for the parsing of modern ECMAScript features
    sourceType: 'module', // Allows for the use of imports
  },
  plugins: ['react', '@typescript-eslint', 'typescript-sort-keys', 'sort-keys-fix'],
  rules: {
    'no-await-in-loop': 'off',
    'prettier/prettier': 'error',
    'sort-keys-fix/sort-keys-fix': 'error',
    'testing-library/no-debug': 'off',
  },
  settings: {
    'import/extensions': ['.js', '.jsx', '.ts', '.tsx'],
    'import/ignore': ['.scss', '.css'],
    'import/parsers': {
      '@typescript-eslint/parser': ['.ts', '.tsx'],
    },
    'import/resolver': {
      node: {
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
      },
    },
  },
};
