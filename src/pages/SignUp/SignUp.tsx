import React, { useState } from 'react';
import { useLocation, useHistory } from 'react-router';
import { Input, Button } from 'antd';
import axios from 'axios';
import { API } from '../../config';

function SignUp() {
	const location = useLocation();
	const [inputNickname, setInputNickname] = useState('');

	const handleInput = event => {
		const { value } = event.target;
		setInputNickname(value);
	};

	const onCreateNickname = () => {
		if (inputNickname === '') {
			alert('닉네임을 입력해주세요');
			return;
		}
		const token: any = location.state;
		axios({
			method: 'post',
			url: `${API.SIGNUP}`,
			data: { nickname: inputNickname },
			headers: {
				Authorization: token,
			},
		}).then(res => {
			console.log('닉네임등록', res.data);
			localStorage.setItem('TOKEN', token);
			alert('회원가입을 축하합니다!');
			window.location.replace('/');
		});
	};
	return (
		<div className="wrapper">
			<div className="nicknameContainer">
				<Input
					className="nicknameInput"
					placeholder="닉네임을 입력하세요....."
					onChange={event => handleInput(event)}
				/>
				<Button type="primary" onClick={onCreateNickname}>
					확인
				</Button>
			</div>
		</div>
	);
}

export default SignUp;
