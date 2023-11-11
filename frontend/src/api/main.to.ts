import { MainData } from '../types/main';
import { RequestsData } from '../types/requests';

export type Main = MainData;

export type Requests = RequestsData;

export type AuthorizationToken = {
	token: string;
};

export type AuthorizationWithToken = {
	status: true;
} & AuthorizationToken;

export type AuthorizationWithoutToken = {
	status: false;
};
