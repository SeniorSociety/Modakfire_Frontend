import React from 'react';
import { useParams } from 'react-router-dom';

function PrevNextBtn(props: any) {
	const { id }: any = useParams();

	return (
		<div className="moveContainerPrevNext">
			{!props.postContent.first && (
				<div
					style={{ paddingBottom: '10px' }}
					className="moveContainerPrevNextBtn"
					onClick={() => {
						window.location.replace(`/board-viewer/${id}/${props.currentPage - 1}`);
					}}
				>
					🔼 &nbsp;이전 글
				</div>
			)}
			{!props.postContent.last && (
				<div
					className="moveContainerPrevNextBtn"
					onClick={() => {
						window.location.replace(`/board-viewer/${id}/${props.currentPage + 1}`);
					}}
				>
					🔽 &nbsp;다음 글
				</div>
			)}
		</div>
	);
}

export default PrevNextBtn;
