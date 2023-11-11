import { createElement, FC, useEffect, useState } from 'react';
import { NotFoundError } from '@utils/error';
import { Loader } from '@components/Loader';
import { MainPage } from '@pages/main';
import { connect } from 'react-redux';
import { StateType } from '../../types/state';
import { fetchMainData } from '@actions/main';
import { fetchRequestsData } from '@actions/requests';
import { useNavigate } from 'react-router-dom';

export type MainPageContainerProps = {
	isLoading: boolean;
	error: Error | undefined;
	fetchMainData: (onComplete?: () => void) => void;
	fetchRequestsData: (page: number, onComplete?: () => void) => void;
};

const Container: FC<MainPageContainerProps> = props => {
	const [initialized, setInitialized] = useState(false);
	const navigate = useNavigate();

	const { isLoading, error, fetchMainData, fetchRequestsData } = props;

	useEffect(() => {
		if (!initialized) {
			fetchMainData(() => fetchRequestsData(1, () => setInitialized(true)));
		}
	}, [initialized]);

	const notFoundError = error instanceof NotFoundError;

	if (!initialized) {
		if (isLoading) {
			return createElement(Loader);
		}

		return null;
	}

	// if (unauthorizedError) {
	// 	navigate('/auth');
	// 	return null;
	// }

	if (notFoundError) {
		navigate('/not_found');
		return null;
	}

	if (!isLoading) {
		return createElement(MainPage);
	}

	return createElement(Loader);
};

export default connect(
	({
		main: { error, isLoading },
	}: StateType): Omit<MainPageContainerProps, 'fetchMainData' | 'fetchRequestsData'> => ({
		error,
		isLoading,
	}),
	{
		fetchMainData,
		fetchRequestsData,
	},
)(Container);
