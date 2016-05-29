# Actano Javascript Style Guide

[![npm](https://img.shields.io/npm/v/eslint-config-actano.svg)](https://www.npmjs.com/package/eslint-config-actano)
[![code style: actano](https://img.shields.io/badge/code%20style-actano-blue.svg)](https://www.npmjs.com/package/eslint-config-actano)

This package provides Actano's .eslintrc.json as an extensible shared config. It extends the [popular config by Airbnb](https://github.com/airbnb/javascript) and changes a few rules to fit our taste.

## Usage

Our default export contains all of our ESLint rules, including ECMAScript 6+ and React. It requires `eslint`, `eslint-plugin-import`, `eslint-plugin-react`, and `eslint-plugin-jsx-a11y`.

Install this package and all it's peer dependencies. Unfortunately, [they cannot be normal dependencies](https://github.com/eslint/eslint/issues/2518).

```bash
npm install --save-dev eslint-config-airbnb eslint-plugin-import eslint-plugin-react eslint-plugin-jsx-a11y eslint
```

Create an `.eslintrc.json` with this content:

```javascript
{
    "extends": "actano"
}
```
