import React from 'react';
import axios from 'axios';
import KakaoLogin from 'react-kakao-login';
import './SignIn.scss';

function SignIn() {
	const onLoginKakao = (data: any) => {
		const accessToken = data.response.access_token;
		console.log('kakao token', accessToken);

		axios({
			method: 'post',
			url: 'http://172.30.1.18:8000/users/kakao',
			headers: {
				Authorization: accessToken,
			},
		}).then(res => {
			console.log(res.data);
			if (res.data.MESSAGE === 'SUCCESS') {
				localStorage.setItem('TOKEN', res.data.token);
			} else {
				alert('오류가 발생 하였습니다.');
			}
		});
	};

	const onLoginNaver = (data: any) => {
		console.log('naver data', data);
		const accessToken = data.accessToken.accessToken;
		console.log('naver token', accessToken);
		axios({
			method: 'post',
			url: 'http://172.30.1.18:8000/users/naver',
			headers: {
				Authorization: data.accessToken.accessToken,
			},
		}).then(res => {
			console.log(res.data);
			if (res.data.MESSAGE === 'SUCCESS') {
				localStorage.setItem('TOKEN', res.data.token);
			} else {
				alert('오류가 발생 하였습니다.');
			}
		});
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
