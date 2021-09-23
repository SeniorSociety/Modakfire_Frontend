import React from 'react';
import ReactDOM from 'react-dom';
import Routes from './Routes';
// import { store } from './app/store';
import { Provider } from 'react-redux';
import './styles/Common.scss';
import './styles/Reset.scss';

ReactDOM.render(
	// <Provider store={store}>
	<Routes />,
	// </Provider>,
	document.getElementById('root'),
);
