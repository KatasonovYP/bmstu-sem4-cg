import { expect, test } from 'vitest'
import Point from "./Point";

test('is same', () => {
	let first = new Point(10, 15)
	let second = new Point(10, 15)
	expect(first.eq(second)).toBe(true);
});
test('move', () => {
	let first = new Point(10, 15)
	first.move(2, 3)
	let second = new Point(12, 18)
	expect(first.eq(second)).toBe(true);
});
