import React, { useState } from 'react';
import { Modal, Button, Input } from 'antd';
import 'antd/dist/antd.css';

function SignUp() {
	const [isModalVisible, setIsModalVisible] = useState(false);

	const showModal = () => {
		setIsModalVisible(true);
	};

	const handleOk = () => {
		setIsModalVisible(false);
	};

	const handleCancel = () => {
		setIsModalVisible(false);
	};
	return (
		<>
			<Button type="primary" onClick={showModal}>
				테스트 모달창!!
			</Button>
			<Modal
				title="닉네임 설정"
				visible={isModalVisible}
				onOk={handleOk}
				onCancel={handleCancel}
				okText="완료"
				cancelText="취소"
			>
				<Input placeholder="닉네임을 입력해주세요..." />
			</Modal>
		</>
	);
}

export default SignUp;
