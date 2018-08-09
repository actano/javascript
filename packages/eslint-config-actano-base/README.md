# Actano Javascript Style Guide

[![npm](https://img.shields.io/npm/v/eslint-config-actano-base.svg)](https://www.npmjs.com/package/eslint-config-actano-base)
[![code style: actano-base](https://img.shields.io/badge/code%20style-actano--base-blue.svg)](https://www.npmjs.com/package/eslint-config-actano-base)

This package provides Actano's .eslintrc.json as an extensible shared config. It extends the [popular config by Airbnb](https://github.com/airbnb/javascript) and changes a few rules to fit our taste.

## Usage

Our default export contains all of our ESLint rules, including ECMAScript 6+. It requires `eslint` and `eslint-plugin-import`.

Install this package and all it's peer dependencies. Unfortunately, [they cannot be normal dependencies](https://github.com/eslint/eslint/issues/2518). Please consult the `package.json` for correct version information of the peer dependencies.

```bash
yarn add --dev eslint-config-actano eslint-plugin-import
```

Create an `.eslintrc.yml` with this content:

```yml
extends: actano-base
```

You might need enable the mocha context and allow having `no-unused-expression` in your test files by configuring this in a separate `.eslintrc.yml` inside your test directory:

```yml
env:
    mocha: true
rules:
    no-unused-expressions: off
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

### Iterators

We want to use generators. eslint: [`no-iterator`](http://eslint.org/docs/rules/no-iterator)

### ForOfStatement

`for .. of` loops provide an easy way to iterate through iterators. eslint: [`no-restricted-syntax`](http://eslint.org/docs/rules/no-restricted-syntax)
