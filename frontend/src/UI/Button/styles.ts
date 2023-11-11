import styled from 'styled-components';
import { DEFAULT_VALUE } from '../../constants/styles';

type ButtonStyledProps = {
	$color?: string;
	$fontSize?: `${number}px`;
	$width?: `${number}px`;
	$height?: `${number}px`;
	$tbPadding?: `${number}px`;
	$lrPadding?: `${number}px`;
	$borderRadius?: `${number}px`;
	$backgroundColor?: string;
};

export const Button = styled.button<ButtonStyledProps>`
	justify-content: center;
	align-items: center;

	color: ${props => props.$color ?? DEFAULT_VALUE};
	font-size: ${props => props.$fontSize ?? 'initial'};
	width: ${props => props.$width ?? DEFAULT_VALUE};
	height: ${props => props.$height ?? DEFAULT_VALUE};
	padding: ${props => `${props.$tbPadding ?? '0'} ${props.$lrPadding ?? '0'}`};
	border-radius: ${props => props.$borderRadius ?? DEFAULT_VALUE};
	background-color: ${props => props.$backgroundColor ?? ''};
`;
