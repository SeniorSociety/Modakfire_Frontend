import React, { useState } from 'react';
import { useLocation, useHistory } from 'react-router';
import { Input, Button } from 'antd';
import axios from 'axios';

function SignUp() {
	const history = useHistory();
	const location = useLocation();
	const [inputNickname, setInputNickname] = useState('');

	const handleInput = event => {
		const { value } = event.target;
		setInputNickname(value);
	};

	const onCreateNickname = () => {
		axios.post('', { nickname: inputNickname }).then(res => {
			console.log('닉네임등록', res.data);
		});
	};
	console.log('location', location);
	return (
		<div className="wrapper">
			<div className="nicknameContainer">
				<Input placeholder="닉네임을 입력하세요....." onChange={event => handleInput(event)} />
				<Button type="primary" onClick={onCreateNickname}>
					확인
				</Button>
			</div>
		</div>
	);
}

export default SignUp;
