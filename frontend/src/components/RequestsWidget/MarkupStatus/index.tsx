import React, { FC } from 'react';
import Spacer from '@ui/Spacer';
import { TitleComponent } from '@ui/TitleComponent';

type StatusType = 0 | 1 | 2;

type MarkupStatusProps = {
	status: StatusType;
};

const statusToColor = (status: StatusType): string => {
	switch (status) {
		case 0: {
			return '#D8DFFF';
		}
		case 1: {
			return '#E3F4E8';
		}
		case 2: {
			return '#FFE3E7';
		}
		default: {
			return '#D8DFFF';
		}
	}
};

const statusToText = (status: StatusType): string => {
	switch (status) {
		default:
		case 0: {
			return 'Не размечено';
		}
		case 1: {
			return 'Успешный ответ';
		}
		case 2: {
			return 'Неуспешный ответ';
		}
	}
};

export const MarkupStatus: FC<MarkupStatusProps> = ({ status }) => {
	return (
		<Spacer backgroundColor={statusToColor(status)} padding='6px 15px' borderRadius='21px'>
			<TitleComponent fontSize='12px' fontWeight='700'>
				{statusToText(status)}
			</TitleComponent>
		</Spacer>
	);
};
