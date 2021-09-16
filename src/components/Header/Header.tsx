import React from 'react';
import { useHistory } from 'react-router-dom';
import './Header.scss';

function Header() {
	const test: string = 'login';
	const history = useHistory();

	function moveToMain(): void {
		history.push('/');
	}

	function moveToLogin(): void {
		history.push('/signin');
	}

	function moveToNamecard(): void {
		history.push('/namecard');
	}

	return (
		<nav className="headerContainer">
			<div className="logo" onClick={moveToMain}>
				<span>모닥불</span>
			</div>
			{test === 'login' && (
				<>
					<div className="signIn" onClick={moveToLogin}>
						<span>회원가입</span>
					</div>
					<div className="logIn" onClick={moveToLogin}>
						<span>로그인</span>
					</div>
				</>
			)}
			{test === 'logout' && (
				<>
					<div className="signIn" onClick={moveToNamecard}>
						<span>명함제작</span>
					</div>
					<div className="logIn" onClick={moveToLogin}>
						<span>로그아웃</span>
					</div>
				</>
			)}
			{test === 'namecard' && (
				<>
					<div className="signIn" onClick={moveToNamecard}>
						<span>명함보기</span>
					</div>
					<div className="logIn" onClick={moveToLogin}>
						<span>로그아웃</span>
					</div>
				</>
			)}
		</nav>
	);
}

export default Header;
