import React, { useState } from 'react';
import './Card.scss';

function Card({ userImage, userName, userSlogan, userEmail, userLocal, edit }: any) {
	interface userInfoProps {
		userImage: string;
		userName: string;
		userSlogan: string;
		userEmail: string;
		userLocal: string;
	}

	const forDelete = '';
	interface editProps {
		edit: boolean;
	}

	const [mainPic, setMainPic] = useState<string>('');

	function imagePreview(e: any): void {
		const imageArray: string[] = Array.from(e.target.files).map(file => URL.createObjectURL(file));

		setMainPic(imageArray.toString());

		Array.from(e.target.files).map((file: any) => URL.revokeObjectURL(file));
	}

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
						<input type="text" className="nameText" placeholder="이름"></input>
						<input type="text" className="titleText" placeholder="좌우명"></input> <br />
						<input type="text" className="commonText" placeholder="010-0000-0000"></input> <br />
						<input
							type="text"
							className="commonText"
							placeholder="서울시 마포구 망원동"
						></input>{' '}
						<br />
						<input type="text" className="commonText" placeholder="이메일"></input> <br />
					</div>
				</div>
			) : (
				<div className="cardContainer">
					<div className="leftContainer">
						<img
							src="https://burst.shopifycdn.com/photos/laughing-man.jpg?width=373&format=pjpg&exif=0&iptc=0"
							alt="laughinman"
						/>
					</div>
					<div className="rightContainer">
						<p className="name">함춘호</p>
						<p className="title">화양연화, 인생은 끝까지</p>
						<span>☎ 010-2935-3943</span> <br />
						<span>⌂ 서울시 과양구 신화동</span> <br />
						<span>✍︎ bonfire65@gmail.com</span>
					</div>
				</div>
			)}
		</>
	);
}

export default Card;
