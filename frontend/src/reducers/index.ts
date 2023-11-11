import { combineReducers } from '@reduxjs/toolkit';
import { main } from './main';
import { requests } from './requests';

export const reducer = combineReducers({
	main,
	requests,
});
