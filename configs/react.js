// /** @type {import("eslint").Linter.Config} */

// module.exports = {
//   env: { browser: true, es2020: true },
//   extends: [
//     "./base.js",
//     "plugin:react/recommended",
//     "plugin:react/jsx-runtime",
//     "plugin:react-hooks/recommended",
//     "plugin:perfectionist/recommended-line-length",
//     "airbnb/hooks",
//     "plugin:mobx/recommended",
//     'plugin:react/recommended'
//   ],
//   parserOptions: {
//     project: true
//   },
//   plugins: [
//     "mobx",
//     "perfectionist",
//     "react",
//     "react-hooks",
//     "import",
//     "react-refresh"
//   ],
//   rules: {
//     "jsx-quotes": ["error", "prefer-single"],
//     "react/jsx-closing-bracket-location": [2, "line-aligned"],
//     "react/jsx-indent": "off",
//     "react/jsx-indent-props": "off",
//     "template-tag-spacing": "off",
//     "no-unexpected-multiline": "off",
//     "import/order": "off",
//     "sort-imports": "off",
//     "react/prop-types": "off",
//     "mobx/missing-observer": "off",
//     "react/react-in-jsx-scope": "off",
//     "react/jsx-sort-props": "off",
//     "react/require-default-props": "off",
//     "react/function-component-definition": [
//       2,
//       { namedComponents: "arrow-function" }
//     ],
//     "react-refresh/only-export-components": [
//       "warn",
//       { allowConstantExport: true }
//     ],
//     "react/no-unstable-nested-components": [
//       "error",
//       {
//         allowAsProps: true
//       }
//     ],
//     "perfectionist/sort-imports": [
//       "error",
//       {
//         type: "line-length",
//         order: "asc",
//         groups: [
//           "type",
//           "react",
//           "router",
//           "mobx",
//           ["builtin", "external"],
//           "uikit",
//           "internal-type",
//           "internal",
//           ["parent-type", "sibling-type", "index-type"],
//           ["parent", "sibling", "index"],
//           "side-effect",
//           "style",
//           "object",
//           "unknown"
//         ],
//         "custom-groups": {
//           value: {
//             react: ["react*"],
//             repo: ["@repo/"],
//             style: ["style*"],
//             router: ["**/*router*", "./*router*"],
//             mobx: ["**/*mobx*"]
//           }
//         }
//       }
//     ],
//     "perfectionist/sort-array-includes": "off",
//     "perfectionist/sort-classes": "off",
//     "perfectionist/sort-enums": [
//       "error",
//       { type: "line-length", order: "asc" }
//     ],
//     "perfectionist/sort-exports": [
//       "error",
//       { type: "line-length", order: "asc" }
//     ],
//     "perfectionist/sort-interfaces": [
//       "error",
//       {
//         type: "line-length",
//         order: "asc",
//         "optionality-order": "required-first"
//       }
//     ],
//     "perfectionist/sort-jsx-props": [
//       "error",
//       { type: "line-length", order: "asc" }
//     ],
//     "perfectionist/sort-maps": ["error", { type: "line-length", order: "asc" }],
//     "perfectionist/sort-named-exports": [
//       "error",
//       { type: "line-length", order: "asc" }
//     ],
//     "perfectionist/sort-named-imports": [
//       "error",
//       { type: "line-length", order: "asc" }
//     ],
//     "perfectionist/sort-objects": [
//       "error",
//       { type: "line-length", order: "asc" }
//     ],
//     "perfectionist/sort-svelte-attributes": [
//       "error",
//       { type: "line-length", order: "asc" }
//     ],
//     "perfectionist/sort-intersection-types": [
//       "error",
//       { type: "line-length", order: "asc" }
//     ],
//     "perfectionist/sort-union-types": [
//       "error",
//       { type: "line-length", order: "asc" }
//     ],
//     "perfectionist/sort-vue-attributes": [
//       "error",
//       { type: "line-length", order: "asc" }
//     ]
//   },
//   ignorePatterns: [
//     ".*.js",
//     "node_modules/",
//     "dist/",
//     ".eslintrc.cjs",
//     "**/vite.config.ts",
//     "commitlint.config.ts",
//     "styled.d.ts"
//   ]
// };
