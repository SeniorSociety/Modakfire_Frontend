import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router';

interface HeaderList {
	id: number;
	src: string;
	href?: string;
	onClick?: () => void;
}

function HeaderBottom() {
	const [isLogin, setIsLogin] = useState(false);
	const [listId, setListId] = useState({ id: null });
	const history = useHistory();

	useEffect(() => {
		if (localStorage.getItem('TOKEN')) {
			setIsLogin(true);
		}
	}, []);

	function checkTOKEN(id: any): void {
		history.push('/signin');
		alert('로그인이 필요합니다');
	}

	const handleNavigate = (clickId: number, href: string) => {
		if (isLogin === false && clickId !== 0) {
			checkTOKEN(listId);
			return;
		}
		history.push(href);
		setListId({ id: clickId });
	};

	const onSignOut = () => {
		alert('로그아웃되었습니다');
		localStorage.removeItem('TOKEN');
		window.location.replace('/');
	};

	const headerBottomList: HeaderList[] = [
		{ id: 0, src: 'https://img.icons8.com/ios/32/000000/home--v3.png', href: '/' },
		{ id: 1, src: 'https://img.icons8.com/ios/50/000000/contact-card.png', href: '/profile' },
		{ id: 2, src: 'https://img.icons8.com/ios/50/000000/user--v1.png', href: '/mypage' },
		{
			id: 3,
			src: 'https://img.icons8.com/ios/50/000000/login-rounded-right--v1.png',
			href: '/signin',
		},
	];

	const LoginHeaderBottomList: HeaderList[] = [
		{ id: 0, src: 'https://img.icons8.com/ios/32/000000/home--v3.png', href: '/' },
		{ id: 1, src: 'https://img.icons8.com/ios/50/000000/contact-card.png', href: '/profile' },
		{ id: 2, src: 'https://img.icons8.com/ios/50/000000/user--v1.png', href: '/mypage' },
		{
			id: 3,
			src: 'https://img.icons8.com/material/50/000000/logout-rounded-left--v1.png',
			onClick: onSignOut,
		},
	];

	const paramList = isLogin ? LoginHeaderBottomList : headerBottomList;

	return (
		<>
			<nav className="headerTopContainer">
				<img
					src="/images/logo_color.png"
					alt="x"
					className="mainLogo"
					onClick={() => {
						handleNavigate(0, '/');
					}}
				/>
			</nav>
			<nav className="headerBottomContainer">
				{paramList.map(({ id, src, href, onClick }) => {
					return (
						<img
							className={id === listId.id ? 'clickedIcon' : 'headerBottomIcon'}
							src={src}
							onClick={onClick ? onClick : () => handleNavigate(id, href)}
						/>
					);
				})}
			</nav>
		</>
	);
}
export default HeaderBottom;
