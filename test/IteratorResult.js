import test from "ava";
import IteratorResult from "../build/iterator-result.js";

test("can be instantiated", t => {

	const object = new IteratorResult();

	t.truthy(object);

});

test("can be reset", t => {

	const result = new IteratorResult(0, true);

	t.is(result.value, 0);
	t.is(result.done, true);

	result.reset();

	t.is(result.value, null);
	t.is(result.done, false);

});
