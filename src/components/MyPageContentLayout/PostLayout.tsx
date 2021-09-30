import { useState, useEffect } from 'react';
import { useHistory } from 'react-router';
import './PostLayout.scss';

function PostLayout(data) {
	const history = useHistory();
	const [dataList, setDataList] = useState([]);

	useEffect(() => {
		setDataList(data.data);
	});

	return (
		<div>
			{dataList.map((post, index) => {
				const lastPost = index === dataList.length - 1;

				return (
					<div
						key={post.id}
						className={`${lastPost && 'last'} post`}
						onClick={() => {
							history.push(`/board-viewer/${post.id}`);
						}}
					>
						<article className="compWrap">
							<h4 className="postTitle">{post.title}</h4>
							<p className="postContent">{post.content}</p>
						</article>
					</div>
				);
			})}
		</div>
	);
}

export default PostLayout;
