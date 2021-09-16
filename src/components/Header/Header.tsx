import React from 'react';
import './header.scss';

function Header() {
	const test: string = 'login';

	return (
		<nav className="headerContainer">
			<div className="logo">
				<span>모닥불</span>
			</div>
			{test === 'login' && (
				<>
					<div className="signIn">
						<span>회원가입</span>
					</div>
					<div className="logIn">
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
