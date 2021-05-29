module.exports = {
  env: {
    es6: true,
    jest: true,
    browser: true,
  },
  extends: [
    'plugin:@typescript-eslint/recommended',
    'prettier',
    'plugin:import/errors',
    'plugin:import/warnings',
    'plugin:import/typescript'
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: './tsconfig.json',
    ecmaVersion: 2020,
    sourceType: "module",
    createDefaultProgram: true,
    ecmaFeatures: {
      jsx: true
    }
  },
  ignorePatterns: [
    'config', 'jest', '.eslintrc.js', 'jest.config.js'
  ],
  plugins: ['prettier', '@typescript-eslint', 'import'],
  settings: {
    react: {
      pragma: 'React',
      version: 'detect'
    },
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
        printWidth: 150
      }
    ],

    'no-restricted-syntax': 0,
    'no-use-before-define': 0,
    'no-unused-vars': 0,
    'no-undef': 0,
    'no-shadow': 0,
    'no-plusplus': 0,
    'no-param-reassign': 0,
    'no-return-assign': 0,

    'import/prefer-default-export': 0,
    'import/no-unresolved': 0,
    'import/no-extraneous-dependencies': 0,
    'import/extensions': 0,

    'jsx-a11y/click-events-have-key-events': 0,

    'react/jsx-filename-extension': 0,
    'react/jsx-one-expression-per-line': 0,
    'react/jsx-props-no-spreading': 0,
    'react/jsx-wrap-multilines': 0,
    'react/no-array-index-key': 0,
    'react/props-types': 0,
    'react/require-default-props': 0,

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
    '@typescript-eslint/no-var-requires': 0,


    'import/order': ['error', {
      groups: ['builtin', 'external', 'internal', 'parent', 'sibling', 'index'],
      'newlines-between': 'always'
    }],

    'sort-imports': ['error', { ignoreDeclarationSort: true }]
  }
}
