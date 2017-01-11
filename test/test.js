"use strict";

const IteratorResult = require("../build/iterator-result");

module.exports = {

	"IteratorResult": {

		"can be instantiated": function(test) {

			test.ok(new IteratorResult());
			test.done();

		},

		"can be reset": function(test) {

			const result = new IteratorResult(0, true);

			test.equal(result.value, 0);
			test.equal(result.done, true);

			result.reset();

			test.equal(result.value, null);
			test.equal(result.done, false);
			test.done();

		}

	}

};
