import React from 'react';
import { useHistory } from 'react-router-dom';

import './Header.scss';

function Header() {
	const history = useHistory();
	const test: string = 'login';

	function toMain(): void {
		history.push('/');
	}

	function toSignIn(): void {
		history.push('/signin');
	}

	return (
		<nav className="headerContainer">
			<div className="logo" onClick={() => toMain()}>
				<span>모닥불</span>
			</div>
			{test === 'login' && (
				<>
					<div className="signIn" onClick={() => toSignIn()}>
						<span>회원가입</span>
					</div>
					<div className="logIn" onClick={() => toSignIn()}>
						<span>로그인</span>
					</div>
				</>
			)}
			{test === 'logout' && (
				<>
					<div className="signIn">
						<span>명함제작</span>
					</div>
					<div className="logIn">
						<span>로그아웃</span>
					</div>
				</>
			)}
			{test === 'namecard' && (
				<>
					<div className="signIn">
						<span>명함보기</span>
					</div>
					<div className="logIn">
						<span>로그아웃</span>
					</div>
				</>
			)}
		</nav>
	);
}

export default Header;
