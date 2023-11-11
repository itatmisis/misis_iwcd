import React, { FC, useCallback, useEffect, useState } from 'react';
import Spacer from '@ui/Spacer';
import { Request } from '../../../../types/requests';
import { fetchRequestMessagesHistory, RequestMessagesHistoryType } from '@api/index';
import { TitleComponent } from '@ui/TitleComponent';
import { InputComponent } from '@ui/InputComponent';

type RequestMessengerProps = {
	request: Request;
};

export const RequestMessenger: FC<RequestMessengerProps> = props => {
	const { request } = props;

	const { number } = request;

	const [requestMessagesData, setRequestMessagesData] = useState<RequestMessagesHistoryType>();
	const [isLoading, setIsLoading] = useState(true);
	const [comment, setComment] = useState<string>('');
	const [mark, setMark] = useState<0 | 1 | 2>(0);

	useEffect(() => {
		const fetchData = async () => {
			const { data } = await fetchRequestMessagesHistory(number);

			setRequestMessagesData(data);
		};

		fetchData().then(() => {
			setIsLoading(false);
		});
	}, [number]);

	const handleCommentChange = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
		setComment(event.target.value);
	}, []);

	const handleMarkChange = useCallback(
		(newMark: 0 | 1 | 2) => {
			if (newMark === mark) {
				setMark(0);
			} else {
				setMark(newMark);
			}
		},
		[mark],
	);

	if (!isLoading && requestMessagesData) {
		const { messages = [] } = requestMessagesData;

		return (
			<Spacer flexGrow>
				<Spacer.Slot
					border='1px solid #CBCFDE'
					backgroundColor='#F4F6FA'
					backgroundImage='/media/auth_background.svg'
					backgroundSize='735px 476px'
					overflow='scroll'
					padding='16px 32px'
					maxHeight='790px'
					flexGrow>
					{messages.map((message, i) => {
						const { number, time, text, sender } = message;

						const isFirst = i === 0 || messages.at(i - 1)?.sender !== sender;
						const isLast = i === messages.length - 1 || messages.at(i + 1)?.sender !== sender;
						const isOnly = isFirst && isLast;

						const radiusGenerator = () => {
							if (sender === 1) {
								return isOnly
									? '10px 10px 10px 10px'
									: isFirst
									? '10px 10px 10px 0'
									: isLast
									? '0 10px 10px 10px'
									: '0 10px 10px 0';
							}
							if (sender === 2) {
								return isOnly
									? '10px 10px 10px 10px'
									: isFirst
									? '10px 10px 0 10px'
									: isLast
									? '10px 0 10px 10px'
									: '10px 0 0 10px';
							}
						};

						return (
							<Spacer
								key={number}
								padding='14px 20px'
								borderRadius={radiusGenerator()}
								backgroundColor={sender === 1 ? '#D8DFFF' : '#476BF0'}
								width='fit-content'
								spaceTop={isFirst ? '16px' : '5px'}
								spaceBottom={isLast ? '16px' : '5px'}
								alignSelf={sender === 2 ? 'flex-end' : 'flex-start'}
								alignItems={sender === 2 ? 'flex-end' : 'flex-start'}
								maxWidth='470px'>
								<TitleComponent
									fontSize='14px'
									fontWeight='400'
									color={sender === 1 ? 'black' : 'white'}>
									{text}
								</TitleComponent>
							</Spacer>
						);
					})}
				</Spacer.Slot>
				<Spacer height='50px' fullWidth position='absolute' bottom='-50px' direction='row'>
					<Spacer.Slot border='1px solid #CBCFDE'>
						<InputComponent
							value={comment}
							onChange={handleCommentChange}
							placeholder='Написать комментарий'
							fontSize='14px'
							padding='20px 24px'
							width='600px'
							height='50px'
						/>
					</Spacer.Slot>
					<Spacer.Slot direction='row' padding='14px 21px' gap='12px' border='1px solid #CBCFDE'>
						<button onClick={() => handleMarkChange(1)}>
							<svg
								xmlns='http://www.w3.org/2000/svg'
								width='24'
								height='21'
								viewBox='0 0 24 21'
								fill='none'>
								<path
									fillRule='evenodd'
									clipRule='evenodd'
									d='M6.22051 10.2814C5.69079 9.11478 4.52443 8.3687 3.24301 8.37677C1.47566 8.35342 0.0238652 9.76665 0 11.5336L0 17.8504C0.02796 19.6144 1.47854 21.0231 3.24301 20.9997C4.63487 21.0107 5.87791 20.1308 6.33001 18.8147M6.22036 10.2813C6.39581 10.6754 6.48627 11.1021 6.48586 11.5335V17.8502C6.48815 18.1796 6.43751 18.5072 6.33586 18.8205M6.22056 10.2813C6.47337 9.77348 6.83616 9.32829 7.28256 8.97811C7.55436 8.77933 7.75352 8.49698 7.84956 8.17427L9.47106 1.87555C9.8673 0.514222 11.2807 -0.279359 12.6496 0.0909061C13.3062 0.251914 13.8705 0.670128 14.2156 1.25145C14.5606 1.83278 14.6574 2.52839 14.4841 3.18178L13.5571 6.5456C13.4576 6.92988 13.5436 7.33853 13.7894 7.65022C14.0352 7.96192 14.4126 8.14081 14.8096 8.13378H20.1076C21.1263 8.11976 22.1088 8.51108 22.8389 9.22157C23.5689 9.93206 23.9867 10.9035 24.0001 11.922L24.0001 16.9715C23.9863 17.9897 23.5684 18.9608 22.8384 19.671C22.1084 20.3811 21.126 20.7722 20.1076 20.7582L9.72906 20.7582C8.32978 20.7653 7.03345 20.024 6.33006 18.8146'
									fill={mark === 1 ? '#6DB49B' : '#BDC1C8'}
								/>
							</svg>
						</button>
						<button onClick={() => handleMarkChange(2)}>
							<svg
								xmlns='http://www.w3.org/2000/svg'
								width='24'
								height='21'
								viewBox='0 0 24 21'
								fill='none'>
								<path
									fillRule='evenodd'
									clipRule='evenodd'
									d='M17.7795 10.7186C18.3092 11.8852 19.4756 12.6313 20.757 12.6232C22.5243 12.6466 23.9761 11.2334 24 9.46637L24 3.14964C23.972 1.38561 22.5215 -0.0230885 20.757 0.000282288C19.3651 -0.0106831 18.1221 0.869173 17.67 2.18534M17.7796 10.7187C17.6042 10.3246 17.5137 9.8979 17.5141 9.46648V3.14976C17.5118 2.82038 17.5625 2.49277 17.6641 2.17945M17.7794 10.7187C17.5266 11.2265 17.1638 11.6717 16.7174 12.0219C16.4456 12.2207 16.2465 12.503 16.1504 12.8257L14.5289 19.1245C14.1327 20.4858 12.7193 21.2794 11.3504 20.9091C10.6938 20.7481 10.1295 20.3299 9.78443 19.7485C9.4394 19.1672 9.34264 18.4716 9.51593 17.8182L10.4429 14.4544C10.5424 14.0701 10.4564 13.6615 10.2106 13.3498C9.96478 13.0381 9.58737 12.8592 9.19043 12.8662H3.89242C2.8737 12.8802 1.89117 12.4889 1.16112 11.7784C0.431067 11.0679 0.0133438 10.0965 -9.15527e-05 9.07799L-9.15527e-05 4.02851C0.0137386 3.01025 0.431633 2.03921 1.16164 1.32903C1.89165 0.618862 2.87395 0.227757 3.89242 0.241774L14.2709 0.241774C15.6702 0.234701 16.9666 0.975965 17.6699 2.18538'
									fill={mark === 2 ? '#BF5552' : '#BDC1C8'}
								/>
							</svg>
						</button>
					</Spacer.Slot>
					<Spacer.Slot border='1px solid #CBCFDE' height='50px'>
						<button style={{ flexGrow: 1 }}>
							<Spacer backgroundColor='#4F6AE8' flexGrow>
								<TitleComponent>Отправить</TitleComponent>
							</Spacer>
						</button>
					</Spacer.Slot>
				</Spacer>
			</Spacer>
		);
	}

	return null;
};
