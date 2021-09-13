import React from 'react';
import InfiniteScroll from '../../components/InfiniteScroll/InfiniteScroll';
import './board.scss';

function Board() {
	return (
		<div className="boardWrap">
			<div className="buttonWrap">
				<button className="like btn">즐겨찾기 추가</button>
				<button className="write btn">게시글 작성하기</button>
			</div>
			<div className="contentWrap">
				<InfiniteScroll />
			</div>
		</div>
	);
}

export default Board;
