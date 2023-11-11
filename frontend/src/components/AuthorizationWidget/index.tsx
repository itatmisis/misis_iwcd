import React, { FC, useCallback, useState } from 'react';
import { InputComponent } from '@ui/InputComponent';
import Spacer from '@ui/Spacer';
import { ButtonComponent } from '@ui/Button';
import { TitleComponent } from '@ui/TitleComponent';

export const AuthorizationWidget: FC = () => {
	const [username, setUsername] = useState('');
	const [password, setPassword] = useState('');

	const handleUsernameChange = useCallback(
		(e: React.ChangeEvent<HTMLInputElement>) => {
			setUsername(e.target.value);
		},
		[setUsername],
	);

	const handlePasswordChange = useCallback(
		(e: React.ChangeEvent<HTMLInputElement>) => {
			setPassword(e.target.value);
		},
		[setPassword],
	);
	//
	// const handleClickCallback = useCallback(async () => {
	// 	try {
	// 		const { status } = data;
	//
	// 		if (status) {
	// 			const { token } = data;
	//
	// 			console.log(token);
	// 		}
	// 	} catch (e) {
	// 		console.log(new Error('Error: ' + e));
	// 	} finally {
	// 		redirect('/');
	// 	}
	// }, []);

	return (
		<Spacer
			gap='11px'
			alignItems='center'
			backgroundImage='/media/auth_background.svg'
			width='1400px'
			flexGrow
			justifyContent='center'>
			<Spacer.Slot>
				<TitleComponent color='#000' fontSize='28px' fontWeight='700'>
					Войти на сайт
				</TitleComponent>
			</Spacer.Slot>
			<Spacer.Slot>
				<InputComponent
					value={username}
					onChange={handleUsernameChange}
					placeholder='Логин или почта'
					width='370px'
					padding='22px 16px'
					borderRadius='12px'
					border='1px solid #CBCFDE'
					backgroundColor='#FFF'
				/>
			</Spacer.Slot>
			<Spacer.Slot>
				<InputComponent
					type='password'
					value={password}
					onChange={handlePasswordChange}
					placeholder='Пароль'
					width='370px'
					padding='22px 16px'
					borderRadius='12px'
					border='1px solid #CBCFDE'
					backgroundColor='#FFF'
				/>
			</Spacer.Slot>
			<Spacer.Slot spaceTop='27px'>
				<ButtonComponent
					color='#FFF'
					fontSize='20px'
					tbPadding='20px'
					width='370px'
					borderRadius='12px'
					backgroundColor='#476BF0'
					onClick={() => null}>
					Войти
				</ButtonComponent>
			</Spacer.Slot>
		</Spacer>
	);
};
