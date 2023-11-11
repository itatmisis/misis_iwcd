import React, { FC } from 'react';
import { TitleStyled } from '@ui/TitleComponent/styles';

type TitleComponentProps = {
	children: React.ReactNode;
	color?: string;
	fontSize?: `${number}px`;
	fontWeight?: `${number}`;
	lineHeight?: `${number}px`;
	height?: `${number}px`;
};

export const TitleComponent: FC<TitleComponentProps> = ({
	children,
	color,
	fontSize,
	fontWeight,
	lineHeight,
	height,
}) => {
	return (
		<TitleStyled
			$color={color}
			$fontSize={fontSize}
			$fontWeight={fontWeight}
			$lineHeight={lineHeight}
			$height={height}>
			{children}
		</TitleStyled>
	);
};
