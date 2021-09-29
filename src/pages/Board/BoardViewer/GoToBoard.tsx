import React from 'react';

function GoToBoard(props: any): JSX.Element {
	return (
		<>
			<button
				className="submitButton"
				onClick={props.goToBoard}
				style={{ width: '100%', backgroundColor: '#A9AAAC' }}
			>
				게시판으로 돌아가기
			</button>
		</>
	);
}

export default GoToBoard;
