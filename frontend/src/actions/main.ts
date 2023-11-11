import { MainData } from '../types/main';
import { FetchMainAction, MainAction } from '../constants/actions';
import { DispatchApi, DispatchSettings } from '../types/dispatch';
import { handleError } from '@utils/error-handling';
import * as api from '../api';

export type SetMainDataAction = {
	type: MainAction.SET_MAIN_DATA;
	data: MainData;
};

export type FetchMainDataActionRequest = {
	type: FetchMainAction.FETCH_MAIN_REQUEST;
};

export type FetchMainDataActionSuccess = {
	type: FetchMainAction.FETCH_MAIN_SUCCESS;
};

export type FetchMainDataActionFailure = {
	type: FetchMainAction.FETCH_MAIN_FAILURE;
	error: Error;
};

export type FetchMainDataAction = FetchMainDataActionRequest | FetchMainDataActionSuccess | FetchMainDataActionFailure;

export const setMainData = (data: MainData): DispatchSettings<void> => {
	return dispatch => {
		dispatch({
			type: MainAction.SET_MAIN_DATA,
			data,
		});
	};
};

export const fetchMainData = (onComplete?: () => void): DispatchApi<void> => {
	return async dispatch => {
		dispatch({
			type: FetchMainAction.FETCH_MAIN_REQUEST,
		});

		try {
			const { data } = await api.fetchMainData();

			dispatch(setMainData(data));
		} catch (e) {
			dispatch(handleError(FetchMainAction.FETCH_MAIN_FAILURE, e));
		} finally {
			onComplete?.();
		}
	};
};
