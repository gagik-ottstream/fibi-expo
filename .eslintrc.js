module.exports = {
  extends: ['expo', './configs/base.js'],
  ignorePatterns: ['/dist/*', '*.config.js'],
  rules: {
    'react/react-in-jsx-scope': 'off',
    "@typescript-eslint/no-unsafe-assignment": "off",
    'perfectionist/sort-objects': 'off',
    '@typescript-eslint/no-use-before-define': 'off',
    '@typescript-eslint/brace-style': "off",
    '@typescript-eslint/comma-dangle': "off",
    '@typescript-eslint/comma-spacing': "off",
    '@typescript-eslint/func-call-spacing': "off",
    '@typescript-eslint/keyword-spacing': "off",
    '@typescript-eslint/no-extra-semi': "off",
    '@typescript-eslint/space-before-blocks': "off",
    '@typescript-eslint/no-throw-literal': "off",
    '@typescript-eslint/quotes': "off",
    '@typescript-eslint/space-before-function-paren': "off",
    '@typescript-eslint/space-infix-ops': "off",
    '@typescript-eslint/object-curly-spacing': "off",
    'react/function-component-definition': ['error', {
      namedComponents: "arrow-function",
      unnamedComponents: "arrow-function"
    }],
    'comma-spacing': ["error", {
      before: false, after: true
    }],
    '@stylistic/object-curly-spacing': ['error', 'always'],
  },
  parserOptions: {
    project: true
  }
};
