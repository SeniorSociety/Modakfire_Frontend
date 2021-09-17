// const BASE_URL = 'internal-RealALB-2052302361.ap-northeast-2.elb.amazonaws.com';
const BASE_URL = 'http://testalb-647104143.ap-northeast-2.elb.amazonaws.com';

export const API = {
	SERVER: `${BASE_URL}`,
	MAIN: `${BASE_URL}/galleries`,
	BOARD: `${BASE_URL}/galleries/:id`,
	SIGNIN: `${BASE_URL}/signin`,
	NAMECARD: `${BASE_URL}/namecard`,
};
