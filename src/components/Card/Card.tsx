import React, { useState } from 'react';
import './Card.scss';

interface userInfoProps {
	data: any;
	setUserImage?: (userImage: string) => void;
	setUserName?: (userName: string) => void;
	setUserSlogan?: (userSlogan: string) => void;
	setUserEmail?: (userEmail: string) => void;
	setUserLocal?: (userLocal: string) => void;
	edit: boolean;
}

function Card({
	data,
	setUserImage,
	setUserName,
	setUserSlogan,
	setUserEmail,
	setUserLocal,
	edit,
}: userInfoProps) {
	const [mainPic, setMainPic] = useState<string>('');

	function imagePreview(e: any): void {
		const imageArray: string[] = Array.from(e.target.files).map(file => URL.createObjectURL(file));
		const file: any = Array.from(e.target.files);

		setUserImage(file);
		setMainPic(imageArray.toString());

		Array.from(e.target.files).map((file: any) => URL.revokeObjectURL(file));
	}

	const CARD_INPUT_VALUE = [
		{
			type: 'text',
			className: 'nameText',
			placeholder: '이름',
			onChange: e => {
				setUserName(e.target.value);
			},
		},
		{
			type: 'text',
			className: 'titleText',
			placeholder: '좌우명',
			onChange: e => {
				setUserSlogan(e.target.value);
			},
		},
		{
			type: 'text',
			className: 'commonText',
			placeholder: '서울시 마포구 망원동',
			onChange: e => {
				setUserLocal(e.target.value);
			},
		},
		{
			type: 'text',
			className: 'commonText',
			placeholder: '이메일',
			onChange: e => {
				setUserEmail(e.target.value);
			},
		},
	];

	return (
		<>
			{edit ? (
				<div className="cardContainer">
					<div className="leftContainer">
						<input type="File" className="uploadInput" onChange={imagePreview} />
						<img src={mainPic} alt="laughinman" style={{ opacity: mainPic.length === 0 ? 0 : 1 }} />
						<img
							src={
								'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSa0qEV_mEF19gs68CDaSmZ4e0kssbxyOAMbw&usqp=CAU'
							}
							alt="laughinman"
							style={{ display: mainPic.length === 0 ? 'block' : 'none' }}
						/>
					</div>
					<div className="rightContainer">
						{CARD_INPUT_VALUE.map(el => {
							return (
								<input
									type={el.type}
									className={el.className}
									placeholder={el.placeholder}
									onChange={el.onChange}
								/>
							);
						})}
					</div>
				</div>
			) : (
				<div className="cardContainer">
					<div className="leftContainer">
						<img src={data.userImage} alt="userImage" />
					</div>
					<div className="rightContainer">
						<p className="name">{data.userName}</p>
						<p className="title">{data.userSlogan}</p>
						<span>{data.userLocal}</span>
						<span>{data.userEmail}</span>
					</div>
				</div>
			)}
		</>
	);
}

export default Card;
