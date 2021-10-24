import React from 'react';
import { useHistory, useParams } from 'react-router-dom';
import InfiniteScroll from '../../components/InfiniteScroll/InfiniteScroll';
import './BoardList.scss';

function BoardList() {
	const history = useHistory();
	const { id }: any = useParams();

	const moveToBoard = () => {
		if (localStorage.getItem('TOKEN') === null) {
			history.push('/signin');
			alert('로그인이 필요합니다');
		} else history.push(`/board-post/${id}`);
	};

	return (
		<div className="boardWrap">
			<div className="buttonWrap">
				<button className="like btn">즐겨찾기 추가</button>
				<button className="write btn" onClick={moveToBoard}>
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
