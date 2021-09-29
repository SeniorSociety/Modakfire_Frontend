import React from 'react';
import ReactMarkdown from 'react-markdown';

function Post(props: any) {
	return (
		<div className="moveContainer">
			<div className="moveContainerTitle">
				<h2>{props.postContent.title}</h2>
			</div>
			<div className="moveContainerWriter">
				<p>[{props.postContent.user_name}]</p>
				<p>[{props.postContent.created_at}]</p>
			</div>
			<div className="moveContainerContent">
				<div>
					<ReactMarkdown>{props.postContent.content}</ReactMarkdown>
				</div>
			</div>
		</div>
	);
}

export default Post;
