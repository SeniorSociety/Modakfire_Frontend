const BASE_URL = 'http://10.58.3.153:8000';

export const API = {
	SERVER: `${BASE_URL}`,

	BOARDLIST: `${BASE_URL}/board-list/:id`,
	BOARDPOST: `${BASE_URL}/board-post`,
	BOARDVIEWER: `${BASE_URL}/galleries`,
	SIGNIN: `${BASE_URL}/signin`,
	NAMECARD: `${BASE_URL}/namecard/:id`,
};
