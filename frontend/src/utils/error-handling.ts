import { FailureAction } from '../types/action';

export const handleError = <A extends FailureAction>(type: A['type'], e: unknown): Pick<A, 'type' | 'error'> => {
	console.error(e);

	if (e instanceof Error) {
		return {
			type,
			error: e,
		};
	}

	if (typeof e === 'string') {
		return {
			type,
			error: new Error(e),
		};
	}

	return {
		type,
		error: new Error('Неизвестная ошибка'),
	};
};
