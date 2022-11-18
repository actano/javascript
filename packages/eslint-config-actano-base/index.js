module.exports = {
  "env": {
    "browser": true
  },
  "extends": [
    "eslint-config-airbnb-base"
  ].map(require.resolve),
  "plugins": [
    "mocha-no-only",
  ],
  "rules": {
    "function-paren-newline": "off",
    "function-call-argument-newline": "off",
    "prefer-regex-literals": "off",
    "semi": ["error", "never"],
    "func-names": "off",
    "explicit-function-return-type": "off",
    "no-underscore-dangle": "off",
    "no-constant-condition": "off",
    "no-iterator": "off",
    "no-restricted-syntax": ["off", "ForOfStatement"],
    "implicit-arrow-linebreak": "off", // We don't want to enforce line break usage in arrow functions
    "no-return-await": "off",
    "import/prefer-default-export": "off",
    "mocha-no-only/mocha-no-only": "error",
    "arrow-parens": ["error", "as-needed", { "requireForBlockBody": true }],
    "typescript-eslint/explicit-function-return-type": "off"
  }
}
