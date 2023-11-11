import React, { FC, useCallback } from 'react';
import { Request } from '../../../../types/requests';
import Spacer from '@ui/Spacer';
import { TitleComponent } from '@ui/TitleComponent';

type RequestsDisplayProps = {
	requests: Request[];
	activeRequest: Pick<Request, 'number'>;
	setActiveRequest: (request: Request) => void;
};

type RequestRowProps = {
	request: Request;
	activeRequest: Pick<Request, 'number'>;
	setActiveRequest: (request: Request) => void;
};

const markupStatusToColor = (status: 0 | 1 | 2) => {
	switch (status) {
		default:
		case 0: {
			return '#4F6AE8';
		}
		case 1: {
			return '#6DB49B';
		}
		case 2: {
			return '#BF5552';
		}
	}
};

const RequestRow: FC<RequestRowProps> = props => {
	const { request, activeRequest, setActiveRequest } = props;

	const { datetime, number, markup_status } = request;

	const dt = new Date(datetime);

	const day = dt.getDay();
	const month = dt.getMonth();
	const year = dt.getFullYear().toString().slice(-2);

	const hours = dt.getHours();
	const minutes = dt.getMinutes();
	const seconds = dt.getSeconds();

	const isActive = number === activeRequest.number;

	const handleClick = useCallback(() => {
		setActiveRequest(request);
	}, [request]);

	return (
		<Spacer
			borderLeft={`3px solid ${markupStatusToColor(markup_status)}`}
			backgroundColor={isActive ? '#D8DFFF' : 'white'}
			borderTop='1px solid #CBCFDE'
			width='314px'
			height='80px'
			padding='23px'
			justifyContent='center'
			alignItems='flex-start'
			direction='column'
			onClick={handleClick}>
			<TitleComponent fontSize='14px' fontWeight='700'>
				{`Обращение\u00A0${number} от\u00A0${day}.${month}.${year}\u00A0—\u00A0${hours}:${minutes}:${seconds}`}
			</TitleComponent>
		</Spacer>
	);
};

export const RequestsDisplay: FC<RequestsDisplayProps> = props => {
	const { requests, activeRequest, setActiveRequest } = props;

	return (
		<Spacer
			position='relative'
			direction='column'
			maxHeight='790px'
			borderRight='1px solid #CBCFDE'
			borderRadius='4px 0 0 4px'
			overflow='scroll'>
			{requests.map((el, i) => (
				<RequestRow
					key={el.number}
					setActiveRequest={setActiveRequest}
					request={el}
					activeRequest={activeRequest}
				/>
			))}
		</Spacer>
	);
};
