import React, { ChangeEvent, FC, HTMLInputTypeAttribute } from 'react';
import { InputStyled } from '@ui/InputComponent/styles';

type InputComponentProps = {
	padding?: `${number}px ${number}px`;
	width?: `${number}px`;
	height?: `${number}px`;
	borderRadius?: `${number}px`;
	border?: string;
	backgroundColor?: string;
	fontSize?: `${number}px`;
	type?: HTMLInputTypeAttribute;
	placeholder?: string;
	value: string;
	onChange: (e: ChangeEvent<HTMLInputElement>) => void;
};

export const InputComponent: FC<InputComponentProps> = ({
	padding,
	width,
	height,
	border,
	borderRadius,
	backgroundColor,
	fontSize,
	type,
	placeholder,
	value,
	onChange,
}) => {
	return (
		<InputStyled
			$padding={padding}
			$width={width}
			$height={height}
			$border={border}
			$borderRadius={borderRadius}
			$backgroundColor={backgroundColor}
			$fontSize={fontSize}
			type={type}
			placeholder={placeholder}
			value={value}
			onChange={onChange}
		/>
	);
};
