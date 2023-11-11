import { configureStore, Store } from '@reduxjs/toolkit';

import { StateType } from '../types/state';
import { Action } from '../types/action';
import { reducer } from '../reducers';
import { initialState as initialStateMain } from '../reducers/main';
import { initialState as initialStateRequests } from '../reducers/requests';

const initialState: StateType = {
	main: initialStateMain,
	requests: initialStateRequests,
};

export const createStore = (preloadedData?: StateType): Store<StateType, Action> => {
	return configureStore({
		devTools: process.env.NODE_ENV === 'development',
		preloadedState: preloadedData ?? initialState,
		reducer,
	});
};
