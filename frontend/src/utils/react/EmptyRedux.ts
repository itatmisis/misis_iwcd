import { FC } from 'react';

import { EmptyProps } from './Empty';

const isDispatchProps = (props: object): props is object & { dispatch: unknown } => 'dispatch' in props;

export const isEmptyReduxProps = (props: object): props is EmptyProps => {
	// Redux в рантайме подставлеят dispatch. Его нужно проигнорировать
	if (isDispatchProps(props)) {
		// eslint-disable-next-line @typescript-eslint/no-unused-vars
		const { dispatch, ...rest } = props;

		return Object.keys(rest).length === 0;
	}

	return Object.keys(props).length === 0;
};

export const EmptyRedux: FC<EmptyProps> = () => null;
