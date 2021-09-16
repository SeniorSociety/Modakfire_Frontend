import React from 'react';
import axios from 'axios';
import KakaoLogin from 'react-kakao-login';
import './SignIn.scss';

function SignIn() {
	const forDelete = '';

	const onLoginKakao = (data: any) => {
		const accessToken = data.response.access_token;
		const headers = {
			Authorization: accessToken,
		};
		console.log('res data', data);

		// axios
		// 	.post('', { headers })
		// 	.then(res => console.log('카카오 로그인 res', res))
		// 	.catch(err => console.error);
	};
	return (
		<div className="wrapper">
			<div className="contentContainer">
				<div className="logoBox">
					<img className="logo" src="./images/senior-care-logo.png" alt="모닥불 로고" />
				</div>
				<div className="socialLoginContainer">
					<p className="socialLoginText">간편 로그인</p>
					<KakaoLogin
						token="01901cb663806af74a0c0c80b56895de"
						onSuccess={result => onLoginKakao(result)}
						onFail={(result: any) => console.log(result)}
						render={(props: any) => (
							<div onClick={props.onClick}>
								<img src="./images/kakao_login.png" alt="카카오로그인" />
							</div>
						)}
						needProfile={true}
						style={{ cursor: 'pointer' }}
					/>
					<div>
						<img className="naverLogin" src="./images/naver_login.png" alt="네이버로그인" />
					</div>
				</div>
			</div>
		</div>
	);
}

export default SignIn;
