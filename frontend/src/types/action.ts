import { FetchMainDataAction, FetchMainDataActionFailure, SetMainDataAction } from '../actions/main';
import { FetchRequestsDataAction, FetchRequestsDataActionFailure, SetRequestsDataAction } from '../actions/requests';

export type MainDataAction = SetMainDataAction | FetchMainDataAction;

export type RequestsDataAction = SetRequestsDataAction | FetchRequestsDataAction;

export type Action = MainDataAction | RequestsDataAction;

export type FailureAction = FetchMainDataActionFailure | FetchRequestsDataActionFailure;
