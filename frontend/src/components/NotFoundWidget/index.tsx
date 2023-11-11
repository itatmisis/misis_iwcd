import React, { FC } from 'react';
import Spacer from '@ui/Spacer';
import { TitleComponent } from '@ui/TitleComponent';

export const NotFoundWidget: FC = () => {
	return (
		<Spacer
			spaceTop='40px'
			gap='11px'
			alignItems='center'
			backgroundImage='/media/auth_background.svg'
			width='1400px'
			flexGrow>
			<Spacer direction='row' gap='30px'>
				<Spacer.Slot alignItems='center'>
					<TitleComponent lineHeight='120px' fontSize='150px' fontWeight='700' color='#476BF0'>
						404
					</TitleComponent>
				</Spacer.Slot>
				<Spacer.Slot direction='column' gap='12px' spaceTop='10px'>
					<TitleComponent fontSize='28px' fontWeight='700' lineHeight='28px'>
						Кажется, <br /> вы потерялись
					</TitleComponent>
					<TitleComponent fontSize='18px' fontWeight='400' lineHeight='18px'>
						Обратитесь к своему руководителю <br /> для получения пиздюлей
					</TitleComponent>
				</Spacer.Slot>
			</Spacer>
		</Spacer>
	);
};
