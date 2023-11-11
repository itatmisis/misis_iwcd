import styled from 'styled-components';
import { DEFAULT_VALUE } from '../../constants/styles';

type TitleStyledProps = {
	$color?: string;
	$fontSize?: `${number}px`;
	$fontWeight?: `${number}`;
	$lineHeight?: `${number}px`;
	$height?: `${number}px`;
};

export const TitleStyled = styled.span<TitleStyledProps>`
	color: ${props => props.$color ?? DEFAULT_VALUE};
	font-size: ${props => props.$fontSize ?? DEFAULT_VALUE};
	font-weight: ${props => props.$fontWeight ?? DEFAULT_VALUE};
	line-height: ${props => props.$lineHeight ?? props.$fontSize ?? DEFAULT_VALUE};
	height: ${props => props.$height ?? DEFAULT_VALUE};
`;
