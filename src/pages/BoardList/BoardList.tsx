import React from 'react';
import { useHistory } from 'react-router-dom';
import InfiniteScroll from '../../components/InfiniteScroll/InfiniteScroll';
import './boardList.scss';

function BoardList() {
	const history = useHistory();

	return (
		<div className="boardWrap">
			<div className="buttonWrap">
				<button className="like btn">즐겨찾기 추가</button>
				<button className="write btn" onClick={() => history.push('./board-post')}>
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
