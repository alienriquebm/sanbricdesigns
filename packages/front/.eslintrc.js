module.exports = {
  root: true,
  env: {
    browser: true,
    es2021: true,
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    tsconfigRootDir: __dirname,
    ecmaVersion: 2020,
    sourceType: 'module',
    project: './tsconfig.json',
  },
  extends: [
    'airbnb',
    'airbnb-typescript',
    'airbnb/hooks',
    'plugin:@typescript-eslint/recommended',
    'plugin:@typescript-eslint/recommended-requiring-type-checking',
    'next/core-web-vitals',
    'plugin:prettier/recommended',
  ],
  plugins: ['prettier'],
  ignorePatterns: ['**/*.js'],
  rules: {
    'react/function-component-definition': [
      'error',
      {
        namedComponents: ['function-declaration', 'arrow-function'],
        unnamedComponents: 'arrow-function',
      },
    ],
    'react/require-default-props': 'off',
    'react/jsx-props-no-spreading': 'off',
    'import/prefer-default-export': 'off',
    '@typescript-eslint/no-misused-promises': 'off',
    '@typescript-eslint/ban-ts-comment': 'off',
    'no-restricted-exports': 'off',
    'react/no-unstable-nested-components': 'off',
    '@typescript-eslint/require-await': 'off',
    '@typescript-eslint/no-floating-promises': 'off',
    '@typescript-eslint/restrict-plus-operands': 'off',
    'jsx-a11y/anchor-is-valid': 'off',
    '@typescript-eslint/no-unsafe-assignment': 'off', // TODO: Turn on when typings are updated
    '@typescript-eslint/no-unsafe-member-access': 'off', // TODO: Turn on when typings are updated
    '@typescript-eslint/no-unsafe-call': 'off', // TODO: Turn on when typings are updated
    '@typescript-eslint/restrict-template-expressions': 'off', // TODO: Turn on when typings are updated
    '@typescript-eslint/no-unsafe-return': 'off', // TODO: Turn on when typings are updated
    '@typescript-eslint/no-unsafe-argument': 'off', // TODO: Turn on when typings are updated,
    "no-param-reassign": "off",
    "import/no-extraneous-dependencies": "off",
  },
};
