import React, { useState } from 'react';
import axios from 'axios';
import { API } from '../../../config';
import { useParams } from 'react-router-dom';

function Pagination(props: any): JSX.Element {
	const { id, view_id }: any = useParams();

	const pageArray = [];
	for (let i = 1; i <= props.pageNum; i++) {
		pageArray.unshift(i);
	}

	const getComment = (e: any) => {
		axios
			.get(`${API.BOARD}/${id}/${view_id}/comments?page=${e}`)
			.then(res => {
				props.setCommentContent(res.data.MESSAGE);
				console.log(res.data);
			})
			.catch(error => {
				console.log(error);
			});
	};

	const minusPage = () => {
		if (props.pageNum !== 1) {
			props.setPageNum(props.pageNum - 1);
		}
	};

	const plusPage = () => {
		if (props.pageRange !== props.pageNum) {
			props.setPageNum(props.pageNum + 1);
		}
	};

	return (
		<>
			<div className="moveContainerPagination">
				<ul className="PaginationBtn">
					<li onClick={minusPage}>이전 댓글</li>
					{/* {pageArray.map((e: any, i: number) => {
						return (
							<li onClick={() => getComment(i)} key={i}>
								{pageArray[i]}
							</li>
						);
					})} */}
					<li onClick={plusPage}>다음 댓글</li>
				</ul>
			</div>
		</>
	);
}

export default Pagination;
