import React, { FC } from 'react';
import Spacer from '@ui/Spacer';
import { Header } from '@components/Header';
import { LinkComponent } from '@components/Link';
import { TitleComponent } from '@ui/TitleComponent';
import { linkMap } from '../constants/navbar';
import RequestsWidget from '@containers/requests-widget';

export const MainPage: FC = () => {
	return (
		<Spacer direction='column' spaceBottom='10px' justifyContent='center'>
			<Spacer.Slot fullWidth>
				<Header
					NavBarComponent={
						<Spacer direction='row' gap='32px'>
							{linkMap.map(({ title, url }) => (
								<Spacer.Slot key={title}>
									<LinkComponent url={url}>
										<TitleComponent color='#000' fontSize='14px' fontWeight='400'>
											{title}
										</TitleComponent>
									</LinkComponent>
								</Spacer.Slot>
							))}
						</Spacer>
					}
				/>
			</Spacer.Slot>
			<Spacer direction='column' alignItems='center' spaceTop='32px'>
				<Spacer.Slot>
					<RequestsWidget />
				</Spacer.Slot>
			</Spacer>
		</Spacer>
	);
};
