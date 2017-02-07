# Iterator Result

[![Build status](https://travis-ci.org/vanruesc/iterator-result.svg?branch=master)](https://travis-ci.org/vanruesc/iterator-result)
[![NPM version](https://badge.fury.io/js/iterator-result.svg)](http://badge.fury.io/js/iterator-result)
[![Dependencies](https://david-dm.org/vanruesc/iterator-result.svg?branch=master)](https://david-dm.org/vanruesc/iterator-result)

The [iterator protocol](https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Iteration_protocols) defines a standard
way to produce a sequence of values. An object is an iterator when it implements a ```next()``` method which returns objects
that have at least the two properties ```value``` and ```done```. This module provides a base class for such iterator results.


## Installation

```sh
npm install iterator-result
``` 


## Usage

```javascript
import IteratorResult from "iterator-result";

export class InfiniteIterator {

	constructor() {

		this.result = new IteratorResult();

	}

	next() {

		return this.result;

	}

}

```


## Contributing

Maintain the existing coding style. Add unit tests for any new or changed functionality. Lint and test your code.
