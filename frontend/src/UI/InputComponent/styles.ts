import styled from 'styled-components';
import { DEFAULT_VALUE } from '../../constants/styles';

const DEFAULT_WIDTH = '370px';
const DEFAULT_HEIGHT = 'auto';
const DEFAULT_SIZE = '16px';

type InputStyledProps = {
	$padding?: `${number}px ${number}px`;
	$width?: `${number}px`;
	$height?: `${number}px`;
	$borderRadius?: `${number}px`;
	$border?: string;
	$backgroundColor?: string;
	$fontSize?: `${number}px`;
};

export const InputStyled = styled.input<InputStyledProps>`
	padding: 22px 16px;
	align-items: center;
	width: ${props => props.$width ?? DEFAULT_WIDTH};
	height: ${props => props.$height ?? DEFAULT_HEIGHT};
	border-radius: ${props => props.$borderRadius ?? DEFAULT_VALUE};
	border: ${props => props.$border ?? DEFAULT_VALUE};
	background-color: ${props => props.$backgroundColor ?? DEFAULT_VALUE};
	font-size: ${props => props.$fontSize ?? DEFAULT_SIZE};
	font-weight: 700;

	::placeholder {
		color: #696e82;
	}
`;
