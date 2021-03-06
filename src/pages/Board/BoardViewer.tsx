import React, { useEffect, useState } from 'react';
import { useParams, useLocation } from 'react-router-dom';
import Post from './BoardViewer/Post';
import Comment from './BoardViewer/Comment';
import axios from 'axios';
import { API } from '../../config';
import '@toast-ui/editor/dist/toastui-editor-viewer.css';
import './Board.scss';

function BoardViewer() {
	const { view_id }: any = useParams();
	const location = useLocation();
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
				url: `${API.GALLERIES}/${location.state}/${view_id}/comments`,
				data: { content: textContent },
				headers: {
					Authorization: localStorage.getItem('TOKEN'),
				},
			})
				.then(response => {
					axios
						.get(`${API.GALLERIES}/${location.state}/${view_id}/comments?page=2`)
						.then(res => {
							setCommentContent(res.data.MESSAGE);
						})
						.catch(error => {
							console.log(error);
						});
				})
				.catch(error => console.log(error));
		} else {
			alert('댓글을 입력해주세요.');
		}
	};

	useEffect(() => {
		axios
			.get(`${API.GALLERIES}/${location.state}/${view_id}/comments?page=1`)
			.then(res => {
				setCommentContent(res.data.MESSAGE);
			})
			.catch(error => {
				console.log(error);
			});
	}, []);

	useEffect(() => {
		axios
			.get(`${API.GALLERIES}/${location.state}/${view_id}`)
			.then(res => {
				setPostContent(res.data.MESSAGE);
			})
			.catch(error => {
				console.log(error);
			});
	}, []);

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
