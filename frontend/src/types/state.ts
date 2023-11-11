import { RequestsData } from './requests';
import { MainData } from './main';

export type MainStateWithData = {
	data: MainData;
	isLoading: false;
	error: undefined;
};

export type MainStateLoading = {
	data: MainData | null;
	isLoading: true;
	error: undefined;
};

export type MainStateWithError = {
	data: MainData | null;
	isLoading: false;
	error: Error;
};

export type MainState = MainStateWithData | MainStateLoading | MainStateWithError;

export type RequestsStateWithData = {
	data: RequestsData;
	isLoading: false;
	error: undefined;
};

export type RequestsStateLoading = {
	data: RequestsData | null;
	isLoading: true;
	error: undefined;
};

export type RequestsStateWithError = {
	data: RequestsData | null;
	isLoading: false;
	error: Error;
};

export type RequestsState = RequestsStateWithData | RequestsStateLoading | RequestsStateWithError;

export type StateType = {
	main: MainState;
	requests: RequestsState;
};
