import { AxiosRequestConfig } from 'axios';
import MockAdapter from 'axios-mock-adapter';

import { axiosInstance } from '../api';
import { mock as mainMock } from './mainMock';
import { mock as requestsMock } from './requestsMock';
import { mock as requestMessagesMock } from './requestMessagesMock';

const mock = new MockAdapter(axiosInstance);

const mockResponse = <T>(name: string, response: T | void) => {
	return (config: AxiosRequestConfig<string>): Promise<[number, T | void]> => {
		const request = config.data && JSON.parse(config.data);

		console.info(`[SENDING REQUEST] ${name}:`, config.url, request);

		const timeout = Math.ceil(Math.random() * 1500);

		return new Promise(resolve => {
			setTimeout(() => {
				console.info(`[RESPONSE] ${name}: \n`, response);
				resolve([200, response]);
			}, timeout);
		});
	};
};

export const applyMocks = (): void => {
	mock.onGet(/^\/api\/fetch_data$/).reply(mockResponse('Fetch Main', mainMock));
	mock.onGet(/^\/api\/+requests$/).reply(mockResponse('Fetch Requests', requestsMock));
	mock.onGet(/^\/api\/requests\?request_id=[0-9]+/).reply(mockResponse('Fetch MessagesHistory', requestMessagesMock));
};
