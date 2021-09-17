import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import './Header.scss';

function Header() {
	const [isLogin, setIsLogin] = useState(true);
	const history = useHistory();

	function moveToMain(): void {
		history.push('/');
	}

	function moveToLogin(): void {
		history.push('/signin');
	}

	function moveToNamecard(): void {
		history.push('/profile');
	}

	return (
		<nav className="headerContainer">
			<div className="logo" onClick={moveToMain}>
				<span>홈버튼</span>
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
						<span>내 프로필</span>
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
