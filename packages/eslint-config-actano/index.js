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
    "explicit-function-return-type": "off",
    "implicit-arrow-linebreak": "off", // We don't want to enforce line break usage in arrow functions
    "react/destructuring-assignment": "off", // We are perfectly fine with using props.myproperty in React components
    "no-return-await": "off",
    "import/prefer-default-export": "off",
    "react/forbid-prop-types": ["error", { "forbid": ["any", "array"] }],
    "react-hooks/rules-of-hooks": "error",
    "react-hooks/exhaustive-deps": "error",
    "mocha-no-only/mocha-no-only": "error",
    "arrow-parens": ["error", "as-needed", { "requireForBlockBody": true }],
    // react
    "react/function-component-definition": "off",
    "react/require-default-props": "off",
  }
}
