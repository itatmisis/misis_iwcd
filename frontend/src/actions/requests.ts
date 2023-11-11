import { FetchMainAction, FetchRequestsAction, RequestsAction } from '../constants/actions';
import { RequestsData } from '../types/requests';
import { DispatchApi, DispatchSettings } from '../types/dispatch';
import * as api from '../api';
import { handleError } from '../utils/error-handling';

export type SetRequestsDataAction = {
	type: RequestsAction.SET_REQUESTS_DATA;
	data: RequestsData;
};

export type FetchRequestsDataActionRequest = {
	type: FetchRequestsAction.FETCH_REQUESTS_REQUEST;
};

export type FetchRequestsDataActionSuccess = {
	type: FetchRequestsAction.FETCH_REQUESTS_SUCCESS;
};

export type FetchRequestsDataActionFailure = {
	type: FetchRequestsAction.FETCH_REQUESTS_FAILURE;
	error: Error;
};

export type FetchRequestsDataAction =
	| FetchRequestsDataActionRequest
	| FetchRequestsDataActionSuccess
	| FetchRequestsDataActionFailure;

export const setRequestsData = (data: RequestsData): DispatchSettings<void> => {
	return dispatch => {
		dispatch({
			type: RequestsAction.SET_REQUESTS_DATA,
			data,
		});
	};
};

export const fetchRequestsData = (page: number, onComplete?: () => void): DispatchApi<void> => {
	return async dispatch => {
		dispatch({
			type: FetchRequestsAction.FETCH_REQUESTS_REQUEST,
		});

		try {
			const { data } = await api.fetchRequestData(page);

			dispatch(setRequestsData(data));
		} catch (e) {
			dispatch(handleError(FetchMainAction.FETCH_MAIN_FAILURE, e));
		} finally {
			onComplete?.();
		}
	};
};
