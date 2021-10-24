import { stringify } from 'querystring';
import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { setConstantValue } from 'typescript';
import './Header.scss';
import HeaderBottom from './HeaderBottom';

function Header() {
	const [isLogin, setIsLogin] = useState(false);
	const history = useHistory();

	const [width, setWidth] = useState(window.innerWidth);

	// media query handle eventlistner : resize

	const handleResize = () => {
		const width = window.innerWidth;
		setWidth(width);
	};

	useEffect(() => {
		window.addEventListener('resize', handleResize);
	}, []);

	// TOKEN Verification

	useEffect((): void => {
		if (localStorage.getItem('TOKEN')) {
			setIsLogin(true);
		}
	}, []);

	function checkTOKEN(): void {
		if (isLogin === false) {
			history.push('/signin');
			alert('로그인이 필요합니다');
		}
	}

	function moveToMain(): void {
		history.push('/');
	}

	function moveToProfile(): void {
		history.push('/mypage');
		checkTOKEN();
	}

	function moveToNamecard(): void {
		history.push('/profile');
		checkTOKEN();
	}

	function moveToLogin(): void {
		history.push('/signin');
	}

	function moveToLogout(): void {
		localStorage.removeItem('TOKEN');
		history.push('/main');
		alert('로그아웃되었습니다');
		window.location.reload();
	}

	return width > 768 ? (
		<nav className="headerContainer">
			<div className="logo" onClick={moveToMain}>
				<img src="/images/logo_color.png" alt="x" className="mainLogo" />
			</div>
			<div className="rightContainer">
				<div className="signIn" onClick={moveToNamecard}>
					<div className="namecard">명함</div>
				</div>
				<div className="signIn" onClick={moveToProfile}>
					<div className="profile">프로필</div>
				</div>
				{!isLogin ? (
					<div className="logIn" onClick={moveToLogin}>
						<div className="login">로그인</div>
					</div>
				) : (
					<div className="logIn" onClick={moveToLogout}>
						<div className="login">나가기</div>
					</div>
				)}
			</div>
		</nav>
	) : (
		<HeaderBottom />
	);
}

export default Header;
