import React from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import InfiniteScroll from '../../components/InfiniteScroll/InfiniteScroll';
import './BoardList.scss';

function BoardList() {
	const history = useHistory();
	// const location = useLocation();
	// const id = location.pathname.split('/')[2];
	return (
		<div className="boardWrap">
			<div className="buttonWrap">
				<button className="like btn">즐겨찾기 추가</button>
				<button className="write btn" onClick={() => history.push(`/board-post`)}>
					게시글 작성하기
				</button>
			</div>
			<div className="contentWrap">
				<InfiniteScroll />
			</div>
		</div>
	);
}

export default BoardList;
