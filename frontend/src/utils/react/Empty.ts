import { FC } from 'react';

export type EmptyProps = Record<string, never>;

export const isEmptyProps = (p: object): p is EmptyProps => {
	return Object.keys(p).length === 0;
};

export const Empty: FC<EmptyProps> = () => null;

export const emptyProps: EmptyProps = {};
