import React from 'react';
import '@toast-ui/editor/dist/toastui-editor-viewer.css';

const Comment = (props: any) => {
	return (
		<>
			<div className="moveContainer">
				<div className="commentContainer">
					<div className="commentTitle">
						<p>댓글</p>
						<div onClick={props.submitComment}>댓글 작성</div>
					</div>
					<div className="commentInputContainer">
						<textarea
							className="commentInput"
							placeholder="댓글을 입력해주세요"
							maxLength="250"
							onChange={(event: any) => props.setTextContent(event.target.value)}
							name="content"
						/>
						<div className="commentInputLength">
							(글자 수 : {props.textContent.length}/250자 입력)
						</div>
					</div>

					{props.commentContent[0] && props.commentContent[0].id ? (
						<>
							{props.commentContent.map((e: any, i: number) => {
								return (
									<div className="commentContainerContent" key={i}>
										<p>{e.content}</p>
										<div className="commentWriter">
											<h6>{e.user_nickname}</h6>
											<p>{e.updated_at}</p>
										</div>
									</div>
								);
							})}
						</>
					) : null}
				</div>
				{/* <button className="submitButton" style={{ width: '100%', backgroundColor: '#A9AAAC' }}>
					게시판으로 돌아가기
				</button> */}
			</div>
		</>
	);
};

export default Comment;
