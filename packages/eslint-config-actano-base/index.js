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
    "prefer-regex-literals": "off",
    "prefer-arrow-callback": "off",
    "no-await-in-loop": "off",
    "function-paren-newline": "off",
    "function-call-argument-newline": "off",
    "no-continue": "off",
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
    "typescript-eslint/explicit-function-return-type": "off",
    "no-restricted-imports": ["error", { "paths": [{
        name: "assert", importNames: ["default"], message: "Please use a import { assert } from '@rplan/allex-type-helpers'"}
      ]}],
  }
}
