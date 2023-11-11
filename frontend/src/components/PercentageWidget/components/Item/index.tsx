import React, { FC } from 'react';

import { ContainerStyled } from './styles';
import { TitleComponent } from '@ui/TitleComponent';
import Spacer from '@ui/Spacer';

type ItemProps = {
	title: string;
	value: number;
	count: number;
	color: 'green' | 'red';
};

export const Item: FC<ItemProps> = props => {
	const { title, value, count, color } = props;

	return (
		<ContainerStyled $backgoundImage={`/media/item_background_${color}.svg`}>
			<Spacer>
				<Spacer.Slot>
					<TitleComponent fontSize='20px' fontWeight='700'>
						{title}
					</TitleComponent>
				</Spacer.Slot>
				<Spacer.Slot spaceTop='34px'>
					<TitleComponent fontSize='68px' fontWeight='700'>{`${value}%`}</TitleComponent>
				</Spacer.Slot>
				<Spacer.Slot>
					<TitleComponent fontSize='20px' fontWeight='400'>
						{`Всего: ${count} обращений`}
					</TitleComponent>
				</Spacer.Slot>
			</Spacer>
		</ContainerStyled>
	);
};
