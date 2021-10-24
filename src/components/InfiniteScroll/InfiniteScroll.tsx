import React, { useState, useEffect, useRef } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import axios from 'axios';
import { API } from '../../config';
import './InfiniteScroll.scss';

interface PostData {
	id: number;
	title: string;
	thumbnail: string;
	view_count: number;
	created_at: string;
	updated_at: string;
	comment_count: number;
	user_nickname: string;
	user_id: number;
}

function InfiniteScroll() {
	const history = useHistory();
	const location = useLocation();
	const id = location.pathname.split('/')[2];

	const [pageIndex, setPageIndex] = useState<number>(1);
	const [dataList, setDataList] = useState([
		{
			id: 0,
			title: '',
			thumbnail: '',
			view_count: 0,
			created_at: '',
			updated_at: '',
			comment_count: 0,
			user_nickname: '',
			user_id: 0,
		},
	]);

	const viewport = useRef<HTMLElement | null>(null);
	const target = useRef<HTMLDivElement | null>(null);

	const getItems = async (pageIndex: number): Promise<void> => {
		if (!pageIndex) return;

		try {
			const res = await axios.get(`${API.GALLERIES}/${id}?page=${pageIndex}`);
			// const res = await axios.get(`./data/mock1.json`);
			const result = res.data.MESSAGE;

			console.log('item');

			setDataList(prevState => {
				return [...result, ...prevState];
			});

			setPageIndex(prevState => {
				if (res.data.IS_NEXT) {
					return prevState + 1;
				} else {
					return 0;
				}
			});
		} catch (error) {
			console.log(error);
		}
	};

	// console.log(dataList);

	useEffect(() => {
		const handleIntersection = (entires: any) => {
			entires.forEach((entry: any) => {
				if (!entry.isIntersecting) {
					return;
				}
				getItems(pageIndex);
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

					function handleDate() {
						const createDate = post.created_at;
						const cutStr = function (a: number, b: number) {
							return createDate.slice(a, b);
						};

						const today = new Date().getDate() === new Date(createDate).getDate();
						const postDate = `${cutStr(2, 4)}.${cutStr(5, 7)}.${cutStr(8, 10)}`;
						const postTime = `${cutStr(11, 13)}:${cutStr(14, 16)}`;
						const updateTime = !today ? postDate : postTime;
						return updateTime;
					}

					return (
						<div
							key={index}
							className={`${lastPost && 'last'} post`}
							ref={lastPost ? target : null}
							onClick={() => {
								history.push(`/board-viewer/${post.id}`);
							}}
						>
							<img alt="thumbnail" src="../public/images/logo_color.png" />
							<article className="postWrap">
								<h2>{post.title}</h2>
								<div className="idTimeCount">
									<p className="user_nickname forCss">{post.user_nickname}</p>
									<p className="created_at forCss">{handleDate()}</p>
								</div>
							</article>
						</div>
					);
				})}
			</section>
		</div>
	);
}

export default InfiniteScroll;
