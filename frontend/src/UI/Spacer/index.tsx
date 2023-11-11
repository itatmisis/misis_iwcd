import React, { FC, ReactNode } from 'react';

import { Container } from './styles';

type ContainerProps = {
	direction?: 'row' | 'column';
	gap?: `${number}px`;
	spaceTop?: `${number}px`;
	spaceBottom?: `${number}px`;
	spaceLeft?: `${number}px`;
	spaceRight?: `${number}px`;
	justifyContent?: 'flex-start' | 'flex-end' | 'center' | 'space-between' | 'space-around' | 'space-evenly';
	alignItems?: 'flex-start' | 'flex-end' | 'center';
	alignSelf?: 'flex-start' | 'flex-end' | 'center';
	justifySelf?: 'flex-start' | 'flex-end' | 'center' | 'space-between' | 'space-around' | 'space-evenly';
	padding?: string;
	fullWidth?: boolean;
	fullHeight?: boolean;
	flexGrow?: boolean;
	width?: string;
	height?: `${number}px`;
	minWidth?: string;
	maxWidth?: string;
	minHeight?: string;
	maxHeight?: string;
	backgroundColor?: string;
	backgroundImage?: string;
	backgroundSize?: string;
	borderRadius?: string;
	borderTop?: string;
	borderBottom?: string;
	borderLeft?: string;
	borderRight?: string;
	border?: string;
	cursor?: string;
	overflow?: 'hidden' | 'visible' | 'scroll' | 'auto';
	position?: 'relative' | 'absolute' | 'fixed' | 'sticky' | 'static';
	top?: string;
	left?: string;
	right?: string;
	bottom?: string;
	onClick?: (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
};

type SpacerProps = ContainerProps & {
	children: ReactNode;
};

type SpacerSubComponents = {
	Slot: typeof Spacer;
};

const Spacer: FC<SpacerProps> & SpacerSubComponents = ({
	children,
	spaceBottom,
	spaceTop,
	spaceLeft,
	spaceRight,
	gap,
	justifyContent,
	alignItems,
	alignSelf,
	justifySelf,
	direction,
	padding,
	fullWidth,
	fullHeight,
	flexGrow,
	width,
	height,
	minWidth,
	maxWidth,
	minHeight,
	maxHeight,
	backgroundColor,
	backgroundImage,
	backgroundSize,
	borderRadius,
	borderTop,
	borderBottom,
	borderLeft,
	borderRight,
	border,
	cursor,
	overflow,
	position,
	onClick,
	top,
	left,
	right,
	bottom,
}) => {
	return (
		<Container
			$direction={direction}
			$gap={gap}
			$justifyContent={justifyContent}
			$alignItems={alignItems}
			$justifySelf={justifySelf}
			$alignSelf={alignSelf}
			$spaceBottom={spaceBottom}
			$spaceLeft={spaceLeft}
			$spaceRight={spaceRight}
			$spaceTop={spaceTop}
			$padding={padding}
			$fullWidth={fullWidth}
			$fullHeight={fullHeight}
			$flexGrow={flexGrow}
			$width={width}
			$height={height}
			$minWidth={minWidth}
			$maxWidth={maxWidth}
			$minHeight={minHeight}
			$maxHeight={maxHeight}
			$backgroundColor={backgroundColor}
			$backgroundImage={backgroundImage}
			$backgroundSize={backgroundSize}
			$borderRadius={borderRadius}
			$borderTop={borderTop}
			$borderBottom={borderBottom}
			$borderLeft={borderLeft}
			$borderRight={borderRight}
			$border={border}
			$cursor={cursor}
			$overflow={overflow}
			$position={position}
			$top={top}
			$left={left}
			$right={right}
			$bottom={bottom}
			onClick={onClick}>
			{children}
		</Container>
	);
};

Spacer.Slot = Spacer;

export default Spacer;
