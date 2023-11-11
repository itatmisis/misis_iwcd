import styled from 'styled-components';

type ContainerStyledProps = {
	$backgoundImage?: string;
};

export const ContainerStyled = styled.div<ContainerStyledProps>`
	width: 370px;
	height: 196px;
	border-radius: 20px;
	border: 1px solid #cbcfde;
	background-position: bottom;
	background-repeat: no-repeat;
	padding: 13px 0 20px 28px;

	background-image: ${props => `url(${props.$backgoundImage})`};
`;
