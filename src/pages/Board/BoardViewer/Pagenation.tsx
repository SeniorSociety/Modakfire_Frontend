import React from 'react';

function Pagenation(props: any): JSX.Element {
	return (
		<>
			<div className="moveContainer">{props.pageRange}</div>
		</>
	);
}

export default Pagenation;
