const BASE_URL = 'internal-BACK-Internal-ALB-1927362478.ap-northeast-2.elb.amazonaws.com';

export const API = {
	SIGN: BASE_URL,
	GALLERIES: `${BASE_URL}/galleries`,
	BOARD_VIEW: `${BASE_URL}/board-viewer`,
	SIGNIN: `${BASE_URL}/users`,
	NAMECARD: `${BASE_URL}/users/namecard`,
	PROFILE: `${BASE_URL}/users/myprofile`,
};
