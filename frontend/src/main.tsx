import React from 'react';
import { createRoot } from 'react-dom/client';
import { Root } from './components/Root';
import { applyMocks } from './mocks/api';
import './styles';
import { GlobalStyles } from './styles';

if (process.env.NODE_ENV === 'development') {
	console.log('Running in development mode');
	applyMocks();
}

const renderApp = () => {
	const node = document.getElementById('root');

	if (node) {
		const root = createRoot(node);

		root.render(
			<>
				<GlobalStyles />
				<Root />
			</>,
		);
	}
	return <div>Hello World!</div>;
};

renderApp();
