/**
 * A basic iterator result.
 */

export default class IteratorResult {

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
