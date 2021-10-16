import { useState, useEffect } from 'react';
import { useHistory } from 'react-router';
import axios from 'axios';
import PostLayout from '../../components/MyPageContentLayout/PostLayout';
import './MyPage.scss';
import { API } from '../../config';

function MyPage() {
	const [contentMode, setContentMode] = useState<string>('gallery');
	const [data, setData] = useState({
		namecard: {
			image: '',
			name: '',
			slogan: '',
			introduce: '',
			email: '',
			location: '',
		},
		bookmarks: [
			{
				gallery_name: '',
				gallery_image: '',
			},
		],
		postings: [
			{
				gallery_id: 0,
				id: 0,
				title: '',
				content: '',
				created_at: '',
			},
		],
		likes: [
			{
				gallery_id: 0,
				id: 0,
				title: '',
				content: '',
				created_at: '',
			},
		],
		commented_postings: [
			{
				gallery_id: 0,
				id: 0,
				title: '',
				content: '',
				created_at: '',
			},
		],
		is_editable: false,
	});

	const { bookmarks, postings, likes, commented_postings, is_editable } = data;
	const { image, name, slogan, introduce, email, location } = data.namecard;
	const history = useHistory();

	const handleContentMode = e => {
		const { className } = e.target;
		const result = className.slice(0, className.indexOf(' '));
		setContentMode(result);
	};

	const showContentMode = () => {
		switch (contentMode) {
			case 'myPosts':
				return <PostLayout data={postings} />;
			case 'likePosts':
				return <PostLayout data={likes} />;
			case 'commentPost':
				return <PostLayout data={commented_postings} />;
		}
	};

	useEffect(() => {
		axios.get(`${API.PROFILE}`).then(res => {
			setData(res.data.MESSAGE);
		});
	}, []);

	return (
		<div className="myPageBody">
			<section className="bio container">
				<article className="rowFlex">
					<img src={image} />
					<div className="contacts">
						<div className="name">{name}</div>
						<div className="email">{email}</div>
						<div className="slogan">{slogan}</div>
					</div>
				</article>
				<div className="intro">{introduce}</div>
			</section>
			<section className="menu container">
				<div className="gallery box" onClick={handleContentMode} />
				<div className="myPosts box" onClick={handleContentMode} />
				<div className="likePosts box" onClick={handleContentMode} />
				<div className="commentPost box" onClick={handleContentMode} />
			</section>
			<section className="contents container">
				{contentMode !== 'gallery' ? (
					showContentMode()
				) : (
					<div className="galleryBody">
						<section className="galleryContainer">
							{bookmarks.map((el, id) => {
								return (
									<div
										key={id}
										className="galleryBox"
										onClick={() => {
											history.push(`/board-list/${id}`);
										}}
									>
										<img src={el.gallery_image} />
										<p>{el.gallery_name}</p>
									</div>
								);
							})}
						</section>
					</div>
				)}
			</section>
		</div>
	);
}

export default MyPage;
