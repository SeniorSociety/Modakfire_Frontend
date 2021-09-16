import React, { useEffect, useState } from 'react';
import '@toast-ui/editor/dist/toastui-editor-viewer.css';
import './board.scss';
import axios from 'axios';
import Post from './BoardViewer/Post';
import Comment from './BoardViewer/Comment';

function BoardViewer(props: any) {
	interface PostInfo {
		title: string;
		content: string;
		created_at: string;
		id: number;
		thumbnail: string;
		updated_at: string;
		user_id: number;
		user_nmae: string;
		view_count: number;
	}

	const [postContent, setPostContent] = useState<PostInfo>({
		title: '',
		content: '',
		created_at: '',
		id: 0,
		thumbnail: '',
		updated_at: '',
		user_id: 0,
		user_nmae: '',
		view_count: 0,
	});

	const [textContent, setTextContent] = useState<{ content: string | number }>({
		content: '',
	});

	interface CommentInfo {
		id: number;
		content: string;
		created_at: string;
		updated_at: string;
		user_nickname: string;
		user_id: number;
	}
	const [commentContent, setCommentContent] = useState<CommentInfo>({
		id: 0,
		content: '',
		created_at: '',
		updated_at: '',
		user_nickname: '',
		user_id: 0,
	});

	const submitComment = (e: any) => {
		if (textContent) {
			axios({
				method: 'post',
				url: 'https://www.seso.kr/galleries/1/2/comments',
				data: { content: textContent },
				headers: {
					Authorization:
						'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6MX0.Te32okoTxCk31WOFbT-LiVhTMcu_5IRPsEum3y930OQ',
				},
			})
				.then(response => {
					axios
						.get('https://www.seso.kr/galleries/1/2/comments?page=2')
						// ${props.match.params.id}
						.then(res => {
							setCommentContent(res.data.MESSAGE);
						})
						.catch(error => {
							console.log(error);
						});
					console.log(response.data.MESSAGE);
				})
				.catch(error => console.log(error));
		} else {
			alert('댓글을 입력해주세요.');
		}
	};

	useEffect(() => {
		axios
			.get('https://www.seso.kr/galleries/1/2/comments?page=2')
			.then(res => {
				setCommentContent(res.data.MESSAGE);
			})
			.catch(error => {
				console.log(error);
			});
	}, []);

	useEffect(() => {
		axios
			.get('https://www.seso.kr/galleries/1/2')
			.then(res => {
				setPostContent(res.data.MESSAGE);
			})
			.catch(error => {
				console.log(error);
			});
	}, []);

	useEffect(() => {
		console.log(postContent);
	}, [postContent]);

	return (
		<>
			<Post postContent={postContent} setPostContent={setPostContent} />
			<Comment
				textContent={textContent}
				setTextContent={setTextContent}
				submitComment={submitComment}
				commentContent={commentContent}
			/>
		</>
	);
}

export default BoardViewer;
