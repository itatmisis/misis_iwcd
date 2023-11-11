import React, { FC, ReactNode } from 'react';
import { Button } from './styles';

type ButtonComponentProps = {
	color?: string;
	fontSize?: `${number}px`;
	width?: `${number}px`;
	height?: `${number}px`;
	tbPadding?: `${number}px`;
	lrPadding?: `${number}px`;
	borderRadius?: `${number}px`;
	backgroundColor?: string;
	children: ReactNode;
	onClick: () => void;
};

export const ButtonComponent: FC<ButtonComponentProps> = ({
	color,
	fontSize,
	width,
	height,
	tbPadding,
	lrPadding,
	borderRadius,
	backgroundColor,
	children,
	onClick,
}) => {
	return (
		<Button
			$color={color}
			$fontSize={fontSize}
			$width={width}
			$height={height}
			$tbPadding={tbPadding}
			$lrPadding={lrPadding}
			$borderRadius={borderRadius}
			$backgroundColor={backgroundColor}
			onClick={onClick}>
			{children}
		</Button>
	);
};
