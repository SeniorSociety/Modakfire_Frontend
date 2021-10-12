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
		history.push('/profile');
	}

	function moveToMyPage(): void {
		history.push('/mypage');
	}

	return (
		<nav className="headerContainer">
			<div className="logo" onClick={moveToMain}>
				<img src="./images/logo_color.png" alt="x" className="mainLogo" />
			</div>
			<div className="rightContainer">
				<div className="signIn" onClick={moveToNamecard}>
					<div className="namecard">명함</div>
				</div>
				<div className="signIn" onClick={moveToMyPage}>
					<div className="profile">프로필</div>
				</div>
				{!isLogin ? (
					<div className="logIn" onClick={moveToLogin}>
						<div className="login">로그인</div>
					</div>
				) : (
					<div className="logIn" onClick={moveToLogin}>
						<div className="logout"></div>
					</div>
				)}
			</div>
		</nav>
	);
}

export default Header;
