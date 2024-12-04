// /** @type {import("eslint").Linter.Config} */

module.exports = {
  extends: [
    "./react.js",
    "plugin:react-native/all"
  ],
  plugins: ['react-native'],
  rules: {
    'react-native/no-raw-text': 2,
    'jsx-quotes': [2, 'prefer-single'],
    quotes: ['error', 'single'],
    "react-native/no-unused-styles": 2,
    "react-native/split-platform-components": 2,
    "react-native/no-inline-styles": 2,
    "react-native/no-color-literals": "off",
    "react-native/no-single-element-style-arrays": 2,
    "comma-dangle": ["error", {
      arrays: "never",
      objects: "never",
      imports: "never",
      exports: "never",
      functions: "never"
    }],
    '@typescript-eslint/comma-dangle': 'off',
    'padding-line-between-statements': [
      "error",
      {
        blankLine: "always", prev: "*", next: "return"
      },
      {
        blankLine: "always", prev: ["const", "let", "var"], next: ["const", "let", "var"]
      },
      {
        blankLine: "always", prev: "directive", next: "*"
      },
      {
        blankLine: "any", prev: "directive", next: "directive"
      }
    ],
    "@typescript-eslint/no-var-requires": "off",
    "@typescript-eslint/no-require-imports": "error"
  },
  ignorePatterns: [
    "node_modules/"
  ],
  env: {
    "react-native/react-native": true
  }
};
