import React, { FC, ReactNode } from 'react';
import Spacer from '@ui/Spacer';
import { TitleComponent } from '@ui/TitleComponent';

type HeaderProps = {
	NavBarComponent?: ReactNode;
};

export const Header: FC<HeaderProps> = props => {
	const { NavBarComponent } = props;

	return (
		<Spacer gap='60px' direction='row' alignItems='center' fullWidth padding='20px 135px' backgroundColor='#F4F6FA'>
			<Spacer.Slot width='140px'>
				<TitleComponent font-size='18px' color='#476BF0' fontWeight='900'>
					ГАЗПРОМБАНК АНАЛИЗ
				</TitleComponent>
			</Spacer.Slot>
			{NavBarComponent}
		</Spacer>
	);
};
