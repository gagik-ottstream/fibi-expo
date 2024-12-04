/** @type {import("eslint").Linter.Config} */

module.exports = {
  extends: [
    'eslint:recommended',
    'plugin:import/recommended',
    'plugin:import/typescript',
    'airbnb',
    'airbnb-typescript',
    'plugin:@typescript-eslint/strict-type-checked',
    'plugin:@typescript-eslint/stylistic-type-checked',
    'plugin:@typescript-eslint/recommended',
  ],
  plugins: [
    '@typescript-eslint',
    'import',
    '@stylistic/eslint-plugin',
    '@stylistic/eslint-plugin-js'
  ],
  parser: '@typescript-eslint/parser',
  rules: {
    '@typescript-eslint/indent': 'off',
    'class-methods-use-this': 'off',
    'import/no-extraneous-dependencies': 'off',
    '@typescript-eslint/no-non-null-assertion': 'off',
    '@typescript-eslint/no-misused-promises': 'off',
    '@typescript-eslint/no-floating-promises': 'off',
    '@typescript-eslint/lines-between-class-members': 'off',
    'import/extensions': 'off',
    '@typescript-eslint/semi': 'off',
    'max-len': 'off',
    '@typescript-eslint/restrict-template-expressions': 'error',
    'arrow-body-style': ['error', 'as-needed'],
    '@stylistic/js/semi': ['error', 'always'],
    '@stylistic/js/max-len': [
      'error',
      {
        code: 180,
        ignoreUrls: true,
        ignoreTemplateLiterals: true,
        ignoreStrings: true,
      },
    ],
    '@stylistic/js/indent': [
      'error',
      2,
      {
        SwitchCase: 2,
      },
    ],
    'lines-between-class-members': [
      'error',
      {
        enforce: [
          {
            blankLine: 'always', prev: '*', next: 'method'
          },
          {
            blankLine: 'always', prev: 'method', next: '*'
          },
          {
            blankLine: 'never', prev: 'field', next: 'field'
          },
        ],
      },
    ],
    "object-curly-newline": ["error", {
      ObjectExpression: {
        multiline: true, minProperties: 1
      },
      ObjectPattern: {
        multiline: true
      },
      ExportDeclaration: {
        multiline: true, minProperties: 1
      },
      ImportDeclaration: {
        multiline: true, minProperties: 2
      },
    }],
    '@typescript-eslint/no-unused-vars': [
      'error',
      {
        vars: 'all',
        args: 'all',
        argsIgnorePattern: '^_',
        varsIgnorePattern: '^_',
        caughtErrors: 'all',
        caughtErrorsIgnorePattern: '^_',
      },
    ],
    '@stylistic/object-curly-spacing': ["error", "never"],
    '@stylistic/block-spacing': "error"

  },
  ignorePatterns: [
    'node_modules/',
    'dist/',
    '.eslintrc.cjs',
    'commitlint.config.ts',
  ],
  settings: {
    'import/resolver': {
      typescript: {},
    },
  },
};
