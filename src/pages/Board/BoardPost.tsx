import React, { useState, useRef, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
// import BoardViewer from './BoardViewer';
import axios from 'axios';
import { Editor } from '@toast-ui/react-editor';
import { API } from '../../config';
import '@toast-ui/editor/dist/toastui-editor.css';
import './Board.scss';

const BoardPost = () => {
	const history = useHistory();
	const editorRef = useRef<Editor>(null);

	interface Information {
		title: string | undefined;
		content: string | undefined;
	}

	const [moveContent, setMoveContent] = useState<Information>({
		title: '',
		content: '',
	});

	const [viewContent, setViewContent] = useState([]);

	const getValue = (e: any) => {
		const { name, value } = e.target;
		setMoveContent({
			...moveContent,
			[name]: value,
		});
	};

	const submitPost = (e: any) => {
		setViewContent(viewContent.concat({ ...moveContent }));
		let form = new FormData();
		form.append('title', moveContent.title);
		form.append('content', moveContent.content);

		axios({
			method: 'post',
			url: `${API.GALLERIES}/1`,
			data: form,
			headers: {
				Authorization:
					'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6MX0.Te32okoTxCk31WOFbT-LiVhTMcu_5IRPsEum3y930OQ',
			},
		})
			.then(response => {
				let POSTING_ID = response.data.POSTING_ID;
				history.push(`/board-viewer/${POSTING_ID}`);
			})
			.catch(error => console.log(error));
	};

	useEffect(() => {
		if (editorRef.current) {
			editorRef.current.getInstance().removeHook('addImageBlobHook');
			editorRef.current.getInstance().addHook('addImageBlobHook', (bolb, callback) => {
				(async () => {
					let formData: any = new FormData();
					formData.append('image', bolb);
					axios
						.post(`${API.GALLERIES}/images`, formData, {
							headers: {
								Authorization:
									'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6MX0.Te32okoTxCk31WOFbT-LiVhTMcu_5IRPsEum3y930OQ',
								'content-type': 'multipart/formdata',
							},
						})
						.then(response => {
							callback(response.data.MESSAGE, 'alt text');
						});
				})();
			});
		}
		return () => {};
	}, [editorRef]);

	return (
		<div className="BoardList">
			<div className="formWrapper">
				<input
					className="titleInput"
					type="text"
					placeholder="제목"
					onChange={getValue}
					name="title"
				/>
				<Editor
					previewStyle="vertical"
					height="400px"
					initialEditType="wysiwyg"
					initialValue={moveContent.content}
					ref={editorRef}
					onChange={() => {
						setMoveContent({
							...moveContent,
							content: editorRef.current?.getInstance().getMarkdown(),
						});
					}}
				/>
			</div>
			<button className="submitButton" onClick={submitPost} style={{ marginTop: '20px' }}>
				게시물 등록
			</button>
			{/* <button
				className="submitButton"
				onClick={() => {
					history.push('./board-list');
				}}
				style={{ marginBottom: '10px', backgroundColor: '#A9AAAC' }}
			>
				게시판으로 돌아가기
			</button> */}
			{/* {3 > 5 && <BoardViewer viewContent={viewContent} />} */}
		</div>
	);
};

export default BoardPost;
