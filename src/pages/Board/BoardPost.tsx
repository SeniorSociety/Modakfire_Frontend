import React, { useState, useRef, useEffect } from 'react';
import BoardViewer from './BoardViewer';
import axios from 'axios';
import { Editor } from '@toast-ui/react-editor';
import '@toast-ui/editor/dist/toastui-editor.css';
import './Board.scss';

const BoardPost = ({ history }: any) => {
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
			url: 'https://www.seso.kr/galleries/1',
			data: form,
			headers: {
				Authorization:
					'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6MX0.Te32okoTxCk31WOFbT-LiVhTMcu_5IRPsEum3y930OQ',
			},
		})
			.then(response => {
				console.log(response.data.MESSAGE);
			})
			.catch(error => console.log(error));
	};

	useEffect(() => {
		console.log(moveContent);
	}, [moveContent]);

	useEffect(() => {
		if (editorRef.current) {
			editorRef.current.getInstance().removeHook('addImageBlobHook');
			editorRef.current.getInstance().addHook('addImageBlobHook', (bolb, callback) => {
				(async () => {
					let formData: any = new FormData();
					formData.append('image', bolb);
					axios
						.post('https://www.seso.kr/galleries/images', formData, {
							headers: {
								Authorization:
									'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6MX0.Te32okoTxCk31WOFbT-LiVhTMcu_5IRPsEum3y930OQ',
								'content-type': 'multipart/formdata',
							},
						})
						.then(response => {
							console.log('성공');
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
			<button className="submitButton" onClick={submitPost}>
				게시물 등록
			</button>
			<button
				className="submitButton"
				onClick={() => {
					history.push('./board-list');
				}}
				style={{ backgroundColor: '#A9AAAC' }}
			>
				게시판으로 돌아가기
			</button>
			{3 > 5 && <BoardViewer viewContent={viewContent} />}
		</div>
	);
};

export default BoardPost;
