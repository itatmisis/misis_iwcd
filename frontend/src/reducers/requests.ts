import { RequestsState } from '../types/state';
import { Action } from '../types/action';
import { FetchRequestsAction, RequestsAction } from '../constants/actions';

export const initialState: RequestsState = {
	data: null,
	isLoading: true,
	error: undefined,
};

export const requests = (state: RequestsState = initialState, action: Action): RequestsState => {
	switch (action.type) {
		case FetchRequestsAction.FETCH_REQUESTS_REQUEST: {
			return {
				...state,
				error: undefined,
				isLoading: true,
			};
		}
		case FetchRequestsAction.FETCH_REQUESTS_FAILURE: {
			return {
				...state,
				error: action.error,
				isLoading: false,
			};
		}
		case RequestsAction.SET_REQUESTS_DATA: {
			return {
				...state,
				data: action.data,
				isLoading: false,
				error: undefined,
			};
		}
		default: {
			return state;
		}
	}
};
