import React, { FC } from 'react';
import Spacer from '@ui/Spacer';
import { Header } from '@tanstack/react-table';
import { Request } from '../../../types/requests';

type HeaderComponentProps = {
	title: string;
	header: Header<Request, unknown>;
	alignItems?: 'flex-start' | 'center';
	spaceLeft?: `${number}px`;
	spaceRight?: `${number}px`;
};

export const HeaderComponent: FC<HeaderComponentProps> = ({
	title,
	header,
	alignItems = 'flex-start',
	spaceLeft,
	spaceRight,
}) => {
	return (
		<Spacer
			direction='row'
			padding='0 14px 0 0'
			alignItems={alignItems}
			spaceLeft={spaceLeft}
			width='fit-content'
			spaceRight={spaceRight}
			cursor='pointer'>
			{title}
			{{
				asc: (
					<div
						style={{
							position: 'absolute',
							right: '-2px',
						}}>
						<svg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 12 12' fill='none'>
							<path d='M2 4H10' stroke='#4F6AE8' strokeOpacity={1} />
							<path d='M3 6H9' stroke='#4F6AE8' strokeOpacity={1} />
							<path d='M4 8H8' stroke='#4F6AE8' strokeOpacity={1} />
						</svg>
					</div>
				),
				desc: (
					<div
						style={{
							position: 'absolute',
							right: '-2px',
						}}>
						<svg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 12 12' fill='none'>
							<path d='M4 4H8' stroke='#4F6AE8' strokeOpacity={1} />
							<path d='M3 6H9' stroke='#4F6AE8' strokeOpacity={1} />
							<path d='M2 8H10' stroke='#4F6AE8' strokeOpacity={1} />
						</svg>
					</div>
				),
			}[header.column.getIsSorted() as string] ?? null}
		</Spacer>
	);
};
