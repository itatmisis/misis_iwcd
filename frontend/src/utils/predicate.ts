export const not =
	<A, B extends A>(predicate: (a: A) => a is B) =>
	<T extends A>(b: T): b is Exclude<T, B> =>
		!predicate(b);
