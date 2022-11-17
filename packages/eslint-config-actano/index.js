module.exports = {
  "env": {
    "browser": true
  },
  "extends": [
    "eslint-config-airbnb"
  ].map(require.resolve),
  "plugins": [
    "mocha-no-only",
    "react-hooks",
  ],
  "rules": {
    "semi": ["error", "never"],
    "func-names": "off",
    "no-underscore-dangle": "off",
    "no-constant-condition": "off",
    "no-iterator": "off",
    "no-restricted-syntax": ["off", "ForOfStatement"],
    "no-restricted-imports": ["error", { "paths": [{
      name: "assert", importNames: ["default"], message: "Please use a import { assert } from '@rplan/allex-type-helpers'"}
      ]}],
    "explicit-function-return-type": "off",
    "implicit-arrow-linebreak": "off", // We don't want to enforce line break usage in arrow functions
    "no-return-await": "off",
    "import/prefer-default-export": "off",
    "mocha-no-only/mocha-no-only": "error",
    "arrow-parens": ["error", "as-needed", { "requireForBlockBody": true }],
    // react
    "react/function-component-definition": "off",
    "react/require-default-props": "off",
    "react/forbid-prop-types": ["error", { "forbid": ["any", "array"] }],
    "react-hooks/rules-of-hooks": "error",
    "react-hooks/exhaustive-deps": "error",
    "react/destructuring-assignment": "off", // We are perfectly fine with using props.myproperty in React components
  }
}
