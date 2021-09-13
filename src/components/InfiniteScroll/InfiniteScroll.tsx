import React, { useEffect, useMemo, useRef } from 'react';
import { useState } from 'react';
import './infiniteScroll.scss';

interface PostData {
	id: number;
	imgPath: string;
	title: string;
	userId: string;
	postTime: string;
	viewCount: number;
	heartCount: number;
	commentCount: number;
}

function InfiniteScroll() {
	const [pageLoadId, setPageLoadId] = useState(0);
	const [dataList, setDataList] = useState([
		{
			id: 0,
			imgPath: './images/test.jpg',
			title: '비오는 날 친구와 함께 탱고를 추면서 추적추적 내리는 비를 흘려 보냈습니다.',
			userId: '탱고와 열정의 남자',
			postTime: '2021.09.01.',
			viewCount: 100,
			heartCount: 50,
			commentCount: 10,
		},
	]);

	const viewport = useRef<HTMLElement | null>(null);
	const target = useRef<HTMLDivElement | null>(null);

	const getItems = async (pageLoadId: number): Promise<void> => {
		const res = await fetch(`/data/mock${pageLoadId}.json`);
		const json = await res.json();

		const result = json;

		setDataList(prevState => {
			return [...prevState, ...result];
		});

		setPageLoadId(prevState => {
			// if(result.isNext) {
			//   return prevState + 1;
			// } else {
			//   종료
			// }
			return prevState + 1;
		});
	};

	useEffect(() => {
		const handleIntersection = (entires: any) => {
			entires.forEach((entry: any) => {
				if (!entry.isIntersecting) {
					return;
				}

				getItems(pageLoadId);
			});
		};

		const io = new IntersectionObserver(handleIntersection);

		if (target.current) {
			io.observe(target.current);
		}

		return () => io.disconnect();
	}, [dataList]);

	return (
		<div className="wrapper">
			<section className="post-grid" ref={viewport}>
				{dataList.map((post: PostData, index: number) => {
					const lastPost = index === dataList.length - 1;
					return (
						<div
							key={index}
							className={`${lastPost && 'last'} post`}
							ref={lastPost ? target : null}
						>
							<img src={post.imgPath} />
							<article className="postWrap">
								<h2 className="postTitle">{post.title}</h2>
								<div className="idTimeCount">
									<p className="userId forCss">{post.userId}</p>
									<p className="postTime forCss">{post.postTime}</p>
								</div>
							</article>
							{/* <article className="countWrap">
								<p className="comment forCss">댓글: {post.commentCount}</p>
								<p className="heart forCss">좋아요: {post.heartCount}</p>
							</article> */}
						</div>
					);
				})}
			</section>
		</div>
	);
}

export default InfiniteScroll;
