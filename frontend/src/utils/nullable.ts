export type Nullable<T> = T | null | undefined;
export type NonNullable<T> = Exclude<T, null | undefined>;
export type NullableRecord<T> = {
	[K in keyof T]: Nullable<T[K]>;
};

export const isNotNullable = <T>(a: Nullable<T>): a is T => a !== null && a !== undefined;
