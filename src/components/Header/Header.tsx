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

	return (
		<nav className="headerContainer">
			<div className="logo" onClick={moveToMain}>
				<img src="./images/logo_color.png" alt="x" className="mainLogo" />
			</div>
			<div className="rightContainer">
				<div className="signIn" onClick={moveToNamecard}>
					<div className="namecard"></div>
				</div>
				<div className="signIn" onClick={moveToNamecard}>
					<div className="profile"></div>
				</div>
				{!isLogin ? (
					<div className="logIn" onClick={moveToLogin}>
						<div className="login"></div>
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
