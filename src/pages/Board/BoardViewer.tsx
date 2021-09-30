import React, { useEffect, useState } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import Post from './BoardViewer/Post';
import AdViewer from './BoardViewer/AdViewer';
import PrevNextBtn from './BoardViewer/PrevNextBtn';
import Comment from './BoardViewer/Comment';
import axios from 'axios';
import { API } from '../../config';
import '@toast-ui/editor/dist/toastui-editor-viewer.css';
import './Board.scss';

function BoardViewer(props: any) {
	const { id, view_id }: any = useParams();

	const history = useHistory();

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

	const [pageNum, setPageNum] = useState(1);

	const [pageRange, setPageRange] = useState(1);

	const [currentPage, setCurrentPage] = useState<number>(1);

	const submitComment = (e: any) => {
		if (textContent) {
			axios({
				method: 'post',
				url: `${API.BOARD}/${id}/${view_id}/comments`,
				data: { content: textContent },
				headers: {
					Authorization:
						'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6MX0.Te32okoTxCk31WOFbT-LiVhTMcu_5IRPsEum3y930OQ',
				},
			})
				.then(res => {
					axios
						.get(`${API.BOARD}/${id}/${view_id}/comments?page=${pageNum}`)
						.then(res => {
							setCommentContent(res.data.MESSAGE);
							setPageNum(res.data.PAGE_RANGE);
							setPageRange(res.data.PAGE_RANGE);
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

	const goToBoard = () => {
		history.push(`/galleries/${id}`);
	};

	useEffect(() => {
		axios
			.get(`${API.BOARD}/${id}/${view_id}`)
			.then(res => {
				setPostContent(res.data.MESSAGE);
				setPageNum(Math.ceil(res.data.MESSAGE.comment_count / 10) * 1);
				setCurrentPage(res.data.MESSAGE.id);
				console.log(res.data);
			})
			.then(res => {})
			.catch(error => {
				console.log(error);
			});
	}, []);

	useEffect(() => {
		axios
			.get(`${API.BOARD}/${id}/${view_id}/comments?page=${pageNum}`)
			.then(res => {
				setCommentContent(res.data.MESSAGE);
				setPageRange(res.data.PAGE_RANGE);
				console.log(res.data);
			})
			.catch(error => {
				console.log(error);
			});
	}, [pageNum]);

	return (
		<>
			<Post postContent={postContent} setPostContent={setPostContent} />
			<AdViewer />
			<PrevNextBtn postContent={postContent} currentPage={currentPage} />
			<Comment
				textContent={textContent}
				setTextContent={setTextContent}
				submitComment={submitComment}
				commentContent={commentContent}
				setCommentContent={setCommentContent}
				pageRange={pageRange}
				pageNum={pageNum}
				setPageNum={setPageNum}
				goToBoard={goToBoard}
			/>
		</>
	);
}

export default BoardViewer;
