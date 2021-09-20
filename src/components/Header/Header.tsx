import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import './Header.scss';

function Header() {
	const [isLogin, setIsLogin] = useState(false);
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
			{!isLogin ? (
				<>
					<div className="logIn" onClick={moveToLogin}>
						<span>로그인</span>
					</div>
				</>
			) : (
				<>
					<div className="signIn" onClick={moveToNamecard}>
						<span>네임카드</span>
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
