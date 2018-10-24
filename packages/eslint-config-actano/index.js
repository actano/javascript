module.exports = {
  "env": {
    "browser": true
  },
  "extends": [
    "eslint-config-airbnb"
  ].map(require.resolve),
  "rules": {
    "semi": ["error", "never"],
    "func-names": "off",
    "no-underscore-dangle": "off",
    "no-constant-condition": "off",
    "no-iterator": "off",
    "no-restricted-syntax": ["off", "ForOfStatement"],
    "implicit-arrow-linebreak": "off", // We don't want to enforce line break usage in arrow functions
    "react/destructuring-assignment": "off", // We are perfectly fine with using props.myproperty in React components
  }
}
