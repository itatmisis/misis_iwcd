import { Nullable } from '@utils/nullable';

export type Request = {
	datetime: string;
	number: string;
	reason: string;
	markup_status: 0 | 1 | 2;
	emotional_gradation: 0 | 1 | 2;
	additional_offer_possibility: boolean;
	stop_themes: string;
	comment?: string;
};

export type RequestsData = {
	quantity: Nullable<number>;
	requests: Nullable<Request[]>;
};
