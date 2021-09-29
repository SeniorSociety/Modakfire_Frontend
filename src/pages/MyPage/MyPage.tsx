import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Card from '../../components/Card/Card';
import History from '../../components/History/History';
import CommentPost from '../../components/MyPageContents/CommentPost';
import Gallery from '../../components/MyPageContents/Gallery';
import Post from '../../components/MyPageContents/Post';
import './MyPage.scss';
import { API } from '../../config';

function MyPage() {
	// const [data, setData] = useState();
	const [contentMode, setContentMode] = useState();

	// useEffect(() => {
	// 	axios
	// 		.get(API.NAMECARD)
	// 		.then(res => {
	// 			setData(res.data.MESSAGE);
	// 		})
	// 		.catch(error => console.log(error));
	// }, []);

	const handleContentMode = e => {
		const { className } = e.target;
		const result = className.slice(0, className.indexOf(' '));
		setContentMode(result);
	};

	const showContentMode = () => {
		switch (contentMode) {
			case 'post':
				return `post`;
			// return <Post />;
			case 'commentPost':
				return `commentPost`;
			// return <CommentPost />;
			case 'gallery':
				return `gallery`;
			// return <Gallery />;
			default:
				return `career`;
			// return <History />;
		}
	};

	return (
		<div className="myPageBody">
			<section className="bio container">
				<div className="rowFlex">
					<img src="./images/test2.jpg" />
					<div className="contacts">
						<div className="phone">010-0000-0000</div>
						<div className="email">toannd.figmateam@gmail.com</div>
						<div className="blog">blgo.com</div>
					</div>
				</div>
				<div className="bioInfo">
					<div className="name">심택준</div>
					<div className="age">33</div>
				</div>
				<div className="motto">안녕하세요</div>
			</section>
			<section className="menu container">
				{/* 클릭을 했을 때 조건 상태값을 변경 */}
				<div className="career box" onClick={handleContentMode}>
					{/* <img src="./images/test3.jpg" /> */}
				</div>
				<div className="post box" onClick={handleContentMode}>
					{/* <img src="./images/test4.jpg" /> */}
				</div>
				<div className="commentPost box" onClick={handleContentMode}>
					{/* <img src="./images/test5.jpg" /> */}
				</div>
				<div className="gallery box" onClick={handleContentMode}>
					{/* <img src="./images/test6.jpg" /> */}
				</div>
			</section>
			<section className="contents container">{showContentMode()}</section>
		</div>
	);
}

export default MyPage;
