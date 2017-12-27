/**
 * A basic iterator result.
 *
 * The next method of an iterator always has to return an object with
 * appropriate properties including done and value.
 */

export default class IteratorResult {

	/**
	 * Constructs a new iterator result.
	 *
	 * @param {Vector3} [value=null] - A value.
	 * @param {Vector3} [done=false] - Whether this result is past the end of the iterated sequence.
	 */

	constructor(value = null, done = false) {

		/**
		 * An arbitrary value returned by the iterator.
		 *
		 * @type Object
		 */

		this.value = value;

		/**
		 * Whether this result is past the end of the iterated sequence.
		 *
		 * @type Boolean
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
