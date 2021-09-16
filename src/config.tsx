const BASE_URL = 'internal-RealALB-2052302361.ap-northeast-2.elb.amazonaws.com';

export const API = {
	SERVER: `${BASE_URL}`,

	MAIN: `${BASE_URL}/galleries`,
	BOARDLIST: `${BASE_URL}/galleries/:id`,
	BOARDPOST: `${BASE_URL}/board-post`,
	BOARDVIEWER: `${BASE_URL}/galleries/:id/:id`,
	SIGNIN: `${BASE_URL}/signin`,
	NAMECARD: `${BASE_URL}/namecard/:id`,
};
