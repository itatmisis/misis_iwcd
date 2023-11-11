import { createElement, FC } from 'react';

import { not } from '../predicate';
import { Empty, EmptyProps, isEmptyProps } from './Empty';
import { EmptyRedux, isEmptyReduxProps } from './EmptyRedux';
import { isNotLoadingProps } from './LoadingField';
import { TitleComponent } from '@ui/TitleComponent';

export const withAlternate = <P extends object, A extends object>(Component: FC<P>, Alt: FC<A>) => {
	return (predicate: (p: P | A) => p is P): FC<P | A> => {
		return (props: P | A) => {
			if (predicate(props)) {
				return createElement<P>(Component, props);
			}
			return createElement(Alt);
		};
	};
};

export const orEmpty = <P extends object>(Component: FC<P>): FC<P | EmptyProps> => {
	return withAlternate(Component, Empty)(not(isEmptyProps));
};

export const orEmptyRedux = <P extends object>(Component: FC<P>): FC<P | EmptyProps> => {
	return withAlternate(Component, EmptyRedux)(not(isEmptyReduxProps));
};

export const orLoadingField = <P extends object>(Component: FC<P>): FC<P | EmptyProps> => {
	return withAlternate(Component, () => createElement(TitleComponent, null, 'Загрузка...'))(isNotLoadingProps);
};
