import { Nullable } from '@utils/nullable';

export type MainData = {
	successes: Nullable<number>;
	failures: Nullable<number>;
	unlabeled: Nullable<number>;
};
