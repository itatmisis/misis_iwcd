import { ThunkAction, ThunkDispatch } from '@reduxjs/toolkit';
import { StateType } from './state';
import { Action } from './action';

type ThunkExtra = undefined;

export type DispatchAction = ThunkDispatch<StateType, ThunkExtra, Action>;

export type DispatchApi<R> = ThunkAction<Promise<R>, StateType, ThunkExtra, Action>;

export type DispatchSettings<R> = ThunkAction<R, StateType, ThunkExtra, Action>;

export type Dispatch<R> = DispatchApi<R> | DispatchSettings<R>;
