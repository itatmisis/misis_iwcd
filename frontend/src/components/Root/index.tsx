import React, { FC } from 'react';
import { createStore } from '../../store';
import { Provider } from 'react-redux';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import MainPageContainer from '../../containers/pages/main';
import { AuthorizationPage } from '@pages/401';
import { NotFoundPage } from '@pages/404';

const store = createStore();

export const Root: FC = () => {
	return (
		<Provider store={store}>
			<BrowserRouter>
				<Routes>
					<Route path='/' element={<MainPageContainer />} />
					<Route path='/auth' element={<AuthorizationPage />} />
					<Route path='/not_found' element={<NotFoundPage />} />
					<Route path='*' element={<Navigate to='/not_found' />} />
				</Routes>
			</BrowserRouter>
		</Provider>
	);
};
