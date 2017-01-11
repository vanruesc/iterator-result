/**
 * A basic iterator result.
 *
 * The next method of an iterator always has to return an object with
 * appropriate properties including done and value.
 *
 * @class IteratorResult
 * @constructor
 * @param {Vector3} [value=null] - A value.
 * @param {Vector3} [done=false] - Whether this result is past the end of the iterated sequence.
 */

export default class IteratorResult {

	constructor(value = null, done = false) {

		/**
		 * An arbitrary value returned by the iterator.
		 *
		 * @property value
		 * @type Object
		 * @default null
		 */

		this.value = value;

		/**
		 * Whether this result is past the end of the iterated sequence.
		 *
		 * @property done
		 * @type Boolean
		 * @default false
		 */

		this.done = done;

	}

	/**
	 * Resets this iterator result.
	 *
	 * @method reset
	 */

	reset() {

		this.value = null;
		this.done = false;

	}

}
