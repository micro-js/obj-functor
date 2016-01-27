
# obj-functor

[![Build status][travis-image]][travis-url]
[![Git tag][git-image]][git-url]
[![NPM version][npm-image]][npm-url]
[![Code style][standard-image]][standard-url]

Object functor. Implements map on objects, using [@f/map-obj](//github.com/micro-js/map-ob).

## Installation

    $ npm install @f/obj-functor

## Usage

```js
var objFunctor = require('@f/obj-functor')

objFunctor({a: 1}).map(add) // => {a: 2}

function add (v) {
  return v + 1
}

```

## API

### objFunctor(obj)

- `obj` - plain object

**Returns:** returns a plain object with map on its prototype

## License

MIT

[travis-image]: https://img.shields.io/travis/micro-js/obj-functor.svg?style=flat-square
[travis-url]: https://travis-ci.org/micro-js/obj-functor
[git-image]: https://img.shields.io/github/tag/micro-js/obj-functor.svg
[git-url]: https://github.com/micro-js/obj-functor
[standard-image]: https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat
[standard-url]: https://github.com/feross/standard
[npm-image]: https://img.shields.io/npm/v/@f/obj-functor.svg?style=flat-square
[npm-url]: https://npmjs.org/package/@f/obj-functor
