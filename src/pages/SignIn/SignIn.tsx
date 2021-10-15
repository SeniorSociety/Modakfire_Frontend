import React from 'react';
import { useHistory } from 'react-router';
import axios from 'axios';
import KakaoLogin from 'react-kakao-login';
// import GoogleLogin from 'react-google-login';
import NaverLogin from '@cereme/react-naver-login';
import './SignIn.scss';

function SignIn() {
	const history = useHistory();
	const onLoginKakao = (data: any) => {
		console.log('kakao data', data);
		const accessToken = data.response.access_token;
		console.log('kakao token', accessToken);

		axios({
			method: 'post',
			url: 'http://172.30.1.28:8000/users/kakao',
			headers: {
				Authorization: accessToken,
			},
		}).then(res => {
			console.log(res.data);
			if (res.data.NEEDNICKNAME) {
				history.push('/signup', res.data.TOKEN);
			} else if (res.data.NEEDNICKNAME && res.data.MESSAGE === 'SUCCESS') {
				alert('환영합니다!');
				localStorage.setItem('TOKEN', res.data.TOKEN);
				window.location.replace('/');
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
			url: 'http://172.30.1.2:8000/users/naver',
			headers: {
				Authorization: data.accessToken.accessToken,
			},
		}).then(res => {
			console.log(res.data);
			if (res.data.NEEDNICKNAME) {
				history.push('/signup', res.data.TOKEN);
			} else if (res.data.MESSAGE === 'SUCCESS') {
				alert('환영합니다!');
				localStorage.setItem('TOKEN', res.data.TOKEN);
				window.location.replace('/');
			} else {
				alert('오류가 발생 하였습니다.');
			}
		});
	};

	// const onLoginGoogle = (data: any) => {
	// 	console.log('google data', data);
	// 	const accessToken = data.accessToken;
	// 	console.log('google token', accessToken);
	// 	const headers = {
	// 		Authorization: accessToken,
	// 	};
	// 	axios({
	// 		method: 'post',
	// 		url: 'http://172.30.1.18:8000/users/naver',
	// 		headers: {
	// 			Authorization: data.accessToken.accessToken,
	// 		},
	// 	}).then(res => console.log(res.data));
	// };

	const onFailureLogin = result => {
		console.log(result);
		alert('오류가 발생 했습니다.');
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
						onFail={(result: any) => onFailureLogin(result)}
						render={(props: any) => (
							<div onClick={props.onClick}>
								<img className="kakaoLogin" src="./images/kakao_login.png" alt="카카오로그인" />
							</div>
						)}
						needProfile={true}
					/>

					<NaverLogin
						clientId="_5OFB3pAeDQs9M0MHnxy"
						callbackUrl="http://localhost:3000/signin"
						render={(props: any) => (
							<div onClick={props.onClick}>
								<img className="naverLogin" src="./images/naver_login.png" alt="네이버 로그인" />
							</div>
						)}
						onSuccess={result => onLoginNaver(result)}
						onFailure={() => console.error()}
					/>

					{/* <GoogleLogin
						clientId="115431303421-gbp4ok1k92vf2k3a5e19kb4hbffhuml1.apps.googleusercontent.com"
						render={(props: any) => (
							<button className="googleButton" onClick={props.onClick} disabled={props.disabled}>
								<div className="googleContainer">
									<img className="googleLogo" src="./images/google_logo.png" alt="구글로그인" />
									<p className="googleLoginText">구글 아이디로 로그인 하기</p>
								</div>
							</button>
						)}
						onSuccess={onLoginGoogle}
						onFailure={onFailureLogin}
						cookiePolicy="single_host_origin"
					/> */}
				</div>
			</div>
		</div>
	);
}

export default SignIn;
