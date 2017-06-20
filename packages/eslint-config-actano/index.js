module.exports = {
  "env": {
    "browser": true
  },
  "extends": [
    "eslint-config-airbnb"
  ].map(require.resolve),
  "rules": {
    "semi": ["error", "never"],
    "no-underscore-dangle": "off",
    "no-constant-condition": "off",
    "no-iterator": "off",
    "no-restricted-syntax": ["off", "ForOfStatement"]
  }
}
