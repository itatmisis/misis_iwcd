import React, { FC } from 'react';
import Spacer from '@ui/Spacer';
import { Header } from '@components/Header';
import { AuthorizationWidget } from '@components/AuthorizationWidget';
import { LinkComponent } from '@components/Link';
import { TitleComponent } from '@ui/TitleComponent';
import { linkMap } from '../constants/navbar';

export const AuthorizationPage: FC = () => {
	return (
		<Spacer direction='column' alignItems='center' fullHeight>
			<Spacer.Slot fullWidth>
				<Header
					NavBarComponent={
						<Spacer direction='row' gap='32px'>
							{linkMap.map(({ title, url }) => (
								<Spacer.Slot key={title}>
									<LinkComponent url={url}>
										<TitleComponent color='#000' fontSize='14px' lineHeight='20px' fontWeight='400'>
											{title}
										</TitleComponent>
									</LinkComponent>
								</Spacer.Slot>
							))}
						</Spacer>
					}
				/>
			</Spacer.Slot>
			<Spacer.Slot flexGrow spaceTop='96px' spaceBottom='96px'>
				<AuthorizationWidget />
			</Spacer.Slot>
		</Spacer>
	);
};
