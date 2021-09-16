const BASE_URL = 'http://internal-RealALB-2052302361.ap-northeast-2.elb.amazonaws.com';

export const API = {
	SERVER: `${BASE_URL}`,

	BOARDLIST: `${BASE_URL}/board-list/:id`,
	BOARDPOST: `${BASE_URL}/board-post`,
	BOARDVIEWER: `${BASE_URL}/galleries`,
	SIGNIN: `${BASE_URL}/signin`,
	NAMECARD: `${BASE_URL}/namecard/:id`,
};
