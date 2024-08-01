module.exports = {
  "env": {
    "browser": true
  },
  "extends": [
    "eslint-config-airbnb",
    "eslint-config-actano-base",
  ].map(require.resolve),
  "plugins": [
    "mocha-no-only",
    "react-hooks",
  ],
  "rules": {
    "no-underscore-dangle": "off",
    "no-constant-condition": "off",
    "no-iterator": "off",
    "no-restricted-imports": ["error", { "paths": [{
      name: "assert", importNames: ["default"], message: "Please use a import { assert } from '@rplan/allex-type-helpers'"}
      ]}],
    // react
    "react/function-component-definition": "off",
    "react/require-default-props": "off",
    "react/forbid-prop-types": ["error", { "forbid": ["any", "array"] }],
    "react-hooks/rules-of-hooks": "error",
    "react-hooks/exhaustive-deps": "error",
    "react/destructuring-assignment": "off", // We are perfectly fine with using props.myproperty in React components
  }
}
