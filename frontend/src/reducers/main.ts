import { MainState } from '../types/state';
import { Action } from '../types/action';
import { FetchMainAction, MainAction } from '../constants/actions';

export const initialState: MainState = {
	data: null,
	isLoading: true,
	error: undefined,
};

export const main = (state: MainState = initialState, action: Action): MainState => {
	switch (action.type) {
		case FetchMainAction.FETCH_MAIN_REQUEST: {
			return {
				...state,
				error: undefined,
				isLoading: true,
			};
		}
		case FetchMainAction.FETCH_MAIN_FAILURE: {
			return {
				...state,
				error: action.error,
				isLoading: false,
			};
		}
		case MainAction.SET_MAIN_DATA: {
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
