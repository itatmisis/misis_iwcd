import axios, { AxiosError, AxiosPromise } from 'axios';
import { Main, Requests } from './main.to';
import { identity } from '../utils/funtion';
import { NotFoundError, UnauthorizedError } from '../utils/error';

export const axiosInstance = axios.create();

axiosInstance.interceptors.response.use(identity, (error: AxiosError) => {
	if (error.response?.status === 401) {
		return Promise.reject(new UnauthorizedError('Требуется авторизация'));
	}

	if (error.response?.status === 404) {
		return Promise.reject(new NotFoundError('Такой страницы не существует'));
	}
});

export const fetchMainData = (): AxiosPromise<Main> => {
	return axiosInstance.get('/api/fetch_data');
};

export const fetchRequestData = (): AxiosPromise<Requests> => {
	return axiosInstance.get('/api/requests');
};

export type RequestMessageType = {
	number: string;
	time: string;
	text: string;
	sender: 1 | 2;
};

export type RequestMessagesHistoryType = {
	datetime: string;
	number: string;
	markup_status: 0 | 1 | 2;
	additional_offer_possibility: boolean;
	comment: string;
	messages: RequestMessageType[];
};

export const fetchRequestMessagesHistory = (request_id: string): AxiosPromise<RequestMessagesHistoryType> => {
	return axiosInstance.get(`/api/requests?request_id=${request_id}`);
};
