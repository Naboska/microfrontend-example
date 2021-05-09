module.exports = {
  env: {
    es6: true,
    jest: true,
    browser: true,
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: './tsconfig.json'
  },
  ignorePatterns: [
    'config', 'jest', '.eslintrc.js', 'jest.config.js'
  ],
  extends: [
    'plugin:@typescript-eslint/recommended',
    'prettier',
    'prettier/@typescript-eslint',
    'plugin:import/errors',
    'plugin:import/warnings',
    'plugin:import/typescript'
  ],
  plugins: ['prettier', '@typescript-eslint', 'import'],
  settings: {
    'import/resolver': {
      node: {
        paths: ['src']
      }
    }
  },
  rules: {
    'prettier/prettier': [
      'warn', {
        arrowParens: 'avoid',
        trailingComma: 'es5',
        tabWidth: 2,
        singleQuote: true,
        printWidth: 100
      }
    ],

    'no-console': 'warn',
    'no-nested-ternary': 'error',
    'no-debugger': 'warn',
    'arrow-body-style': ['error', 'as-needed'],

    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/no-use-before-define': 'off',
    '@typescript-eslint/no-non-null-assertion': 'off',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/no-empty-function': 'error',
    '@typescript-eslint/no-unused-vars': 'error',

    'import/order': ['error', {
      groups: ['builtin', 'external', 'internal', 'parent', 'sibling', 'index'],
      'newlines-between': 'always'
    }],

    'sort-import': ['error', { ignoreDeclarationSort: true }]
  }
}