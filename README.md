# Actano Javascript Style Guide

[![npm](https://img.shields.io/npm/v/eslint-config-actano.svg)](https://www.npmjs.com/package/eslint-config-actano)
[![code style: actano](https://img.shields.io/badge/code%20style-actano-blue.svg)](https://www.npmjs.com/package/eslint-config-actano)

This package provides Actano's .eslintrc.json as an extensible shared config. It extends the [popular config by Airbnb](https://github.com/airbnb/javascript) and changes a few rules to fit our taste.

## Usage

Our default export contains all of our ESLint rules, including ECMAScript 6+ and React. It requires `eslint`, `eslint-plugin-import`, `eslint-plugin-react`, and `eslint-plugin-jsx-a11y`.

Install this package and all it's peer dependencies. Unfortunately, [they cannot be normal dependencies](https://github.com/eslint/eslint/issues/2518).

```bash
npm install --save-dev eslint-config-actano eslint-plugin-import eslint-plugin-react eslint-plugin-jsx-a11y eslint
```

Create an `.eslintrc.json` with this content:

```javascript
{
  "extends": "actano"
}
```

You might need to allow importing `devDependencies` in your test files by specifying them as a glob pattern ([details](https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-extraneous-dependencies.md#options)):

```javascript
{
    "extends": "actano",
    "rules": {
      "import/no-extraneous-dependencies": ["error", {"devDependencies": ["**/*.unit.js"]}]
    }
}
```

## Deviations from Airbnb

We are adopting most of the rules from Airbnb. Please [check out their styleguide](https://github.com/airbnb/javascript) to get the full picture.

We do have different opinions on these topics:

### Semicolons

They are [not needed](https://www.youtube.com/watch?v=gsfbh17Ax9I) and code looks better without them. eslint: [`semi`](http://eslint.org/docs/rules/semi)

### Underscores in function names

We use leading underscores to express that a function is private. eslint: [`no-underscore-dangle`](http://eslint.org/docs/rules/no-underscore-dangle)

### Constant conditions

When using generators, `while (true)` loops make sense. eslint: [`no-constant-condition`](http://eslint.org/docs/rules/no-constant-condition)

### Function calls before definition

Classes read better if private methods are defined below their first usage. Tests read better when all helper functions are defined at the bottom. eslint: [`no-use-before-define`](http://eslint.org/docs/rules/no-use-before-define)

### Iterators

We want to use generators. eslint: [`no-iterator`](http://eslint.org/docs/rules/no-iterator)
