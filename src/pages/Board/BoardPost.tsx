import React, { useState, useRef, useEffect } from 'react';
import { useHistory, useParams } from 'react-router-dom';
// import BoardViewer from './BoardViewer';
import axios from 'axios';
import { Editor } from '@toast-ui/react-editor';
import { API } from '../../config';
import '@toast-ui/editor/dist/toastui-editor.css';
import './Board.scss';

const BoardPost = () => {
	const history = useHistory();
	const { id }: any = useParams();
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

		console.log(moveContent);

		axios({
			method: 'post',
			url: `${API.GALLERIES}/${id}`,
			data: form,
			headers: {
				Authorization: localStorage.getItem('TOKEN'),
			},
		})
			.then(response => {
				history.push(`/board-list/${id}`);
			})
			.catch(error => console.log(error));
		console.log(form);
	};

	useEffect(() => {
		if (editorRef.current) {
			editorRef.current.getInstance().removeHook('addImageBlobHook');
			editorRef.current.getInstance().addHook('addImageBlobHook', (blob, callback) => {
				(async () => {
					let formData: any = new FormData();
					formData.append('image', blob);
					axios
						.post(`${API.GALLERIES}/images`, formData, {
							headers: {
								Authorization: localStorage.getItem('TOKEN'),
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
			{3 > 5 && <BoardViewer viewContent={viewContent} />}
		</div>
	);
};

export default BoardPost;
