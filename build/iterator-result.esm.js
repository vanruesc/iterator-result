/**
 * iterator-result v1.0.0 build Fri Dec 27 2019
 * https://github.com/vanruesc/iterator-result
 * Copyright 2019 Raoul van Rüschen, Zlib
 */
/**
 * A basic iterator result.
 */

class IteratorResult {

	/**
	 * Constructs a new iterator result.
	 *
	 * @param {Object} [value=null] - A value.
	 * @param {Boolean} [done=false] - Whether this result is past the end of the iterated sequence.
	 */

	constructor(value = null, done = false) {

		/**
		 * The value returned by the iterator.
		 *
		 * @type {Object}
		 */

		this.value = value;

		/**
		 * Whether this result is past the end of the iterated sequence.
		 *
		 * @type {Boolean}
		 */

		this.done = done;

	}

	/**
	 * Resets this iterator result.
	 */

	reset() {

		this.value = null;
		this.done = false;

	}

}

export default IteratorResult;
