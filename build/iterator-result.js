/**
 * iterator-result v0.0.0 build Jan 11 2017
 * https://github.com/vanruesc/iterator-result
 * Copyright 2017 Raoul van Rüschen, Zlib
 */

(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
  typeof define === 'function' && define.amd ? define(factory) :
  (global.ITERATORRESULT = factory());
}(this, (function () { 'use strict';

  var classCallCheck = function (instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  };

  var createClass = function () {
    function defineProperties(target, props) {
      for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
      }
    }

    return function (Constructor, protoProps, staticProps) {
      if (protoProps) defineProperties(Constructor.prototype, protoProps);
      if (staticProps) defineProperties(Constructor, staticProps);
      return Constructor;
    };
  }();

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

  var IteratorResult = function () {
  	function IteratorResult() {
  		var value = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
  		var done = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
  		classCallCheck(this, IteratorResult);


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

  	createClass(IteratorResult, [{
  		key: "reset",
  		value: function reset() {

  			this.value = null;
  			this.done = false;
  		}
  	}]);
  	return IteratorResult;
  }();

  return IteratorResult;

})));
