import React, { FC, ReactNode, useCallback } from 'react';
import { ButtonComponent } from '@ui/Button';
import { useNavigate } from 'react-router-dom';

export type LinkComponentProps = {
	children: ReactNode;
	url: string;
};

export const LinkComponent: FC<LinkComponentProps> = props => {
	const { children, url } = props;
	const navigate = useNavigate();

	const handleLinkClick = useCallback(() => {
		navigate(url);
	}, []);

	return (
		<ButtonComponent onClick={handleLinkClick} height='20px'>
			{children}
		</ButtonComponent>
	);
};
