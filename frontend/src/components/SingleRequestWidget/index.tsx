import React, { FC, useCallback, useState } from 'react';
import Spacer from '@ui/Spacer';
import { TitleComponent } from '@ui/TitleComponent';
import { Request } from '../../types/requests';
import { RequestsDisplay } from '@components/SingleRequestWidget/components/RequestsDisplay';
import { RequestMessenger } from '@components/SingleRequestWidget/components/RequestMessanger';

type SingleRequestWidgetProps = {
	requests: Request[];
	request: Request;
	onBackClick: () => void;
};

export const SingleRequestWidget: FC<SingleRequestWidgetProps> = props => {
	const { requests, request, onBackClick } = props;

	const [currentRequest, setCurrentRequest] = useState<Request>(request);

	const handleBackClick = useCallback(() => {
		onBackClick();
	}, []);

	return (
		<Spacer width='1170px' direction='column'>
			<Spacer direction='row' justifyContent='flex-start'>
				<button onClick={handleBackClick}>
					<svg xmlns='http://www.w3.org/2000/svg' width='20' height='20' viewBox='0 0 20 20' fill='none'>
						<path d='M13 15L8 10L13 5' stroke='black' strokeWidth='1.66667' />
					</svg>
				</button>
				<TitleComponent fontSize='28px' fontWeight='700'>
					Детализация обращений
				</TitleComponent>
			</Spacer>
			<Spacer spaceTop='16px' direction='row' borderRadius='4px' border='1px solid #CBCFDE'>
				<Spacer.Slot>
					<RequestsDisplay
						requests={requests}
						activeRequest={currentRequest}
						setActiveRequest={setCurrentRequest}
					/>
				</Spacer.Slot>
				<Spacer.Slot fullWidth padding='0 0 50px 0'>
					<RequestMessenger request={request} />
				</Spacer.Slot>
			</Spacer>
		</Spacer>
	);
};
