import React, { useState } from 'react';
import { Button } from 'antd';
import 'antd/dist/antd.css';
interface Inputs {
	id?: number;
	year: string;
	title: string;
	subtitle: string;
}

function History() {
	const [contents, setContents] = useState<Inputs>({
		id: 0,
		year: '',
		title: '',
		subtitle: '',
	});

	const [histories, setHistories] = useState([]);

	const onChangeHandler = (e: any) => {
		const { name, value } = e.target;
		setContents({ ...contents, [name]: value });
	};

	function createHistory(): void {
		const history = {
			year: contents.year,
			title: contents.title,
			subtitle: contents.subtitle,
		};
		setHistories([...histories, history]);
		setContents({ year: '', title: '', subtitle: '' });
	}

	function onReset(): void {
		setContents({
			year: '',
			title: '',
			subtitle: '',
		});
	}

	console.log('이력추가 ', histories);

	return (
		<div>
			<div className="writeHistoryContainer">
				<input
					name="year"
					className="historyYear"
					type="text"
					placeholder="연도 2021"
					onChange={onChangeHandler}
					value={contents.year}
				/>
				<input
					name="title"
					className="historyTitle"
					type="text"
					placeholder="예) ceo"
					onChange={onChangeHandler}
					value={contents.title}
				/>
				<input
					name="subtitle"
					className="historySubtitle"
					type="text"
					placeholder="예) 삼성그룹"
					onChange={onChangeHandler}
					value={contents.subtitle}
				/>
				<div className="buttonContainer">
					<Button type="primary" size={'large'} onClick={createHistory}>
						추가
					</Button>
					<Button type="primary" danger size={'large'} onClick={onReset}>
						초기화
					</Button>
				</div>
			</div>
		</div>
import React from 'react';
import './History.scss';

function History() {
	const edit: string = '';

	return (
		<>
			<div className="historyContainer">
				<div className="line"></div>

				<header className="workTitle">
					이력
					<div className="square"></div>
				</header>

				{edit === 'edit' && (
					<>
						<section className="workContainer">
							<div className="leftContainer">
								<div className="yearContainer">
									<span>2019</span>
								</div>
								<div className="yearIcon"></div>
							</div>
							<div className="rightContainer">
								<div className="title">이사장</div>
								<div className="subtitle">해오름재단 마포구 서울시</div>
							</div>
						</section>
					</>
				)}
				{edit === '' && (
					<>
						<section className="workContainer">
							<div className="leftContainer">
								<div className="yearContainer">
									<input type="text" className="yearInput" placeholder="1997"></input>
								</div>
								<div className="yearIcon"></div>
							</div>
							<div className="rightContainer">
								<input type="text" className="title" placeholder="예시) 교장선생님" />
								<input
									type="text"
									className="subtitle"
									placeholder="예시) 시소중학교 마포구 서울시"
								/>
							</div>
						</section>
						<input type="button" className="add" value="추 가 하 기"></input>
					</>
				)}
			</div>
		</>
	);
}

export default History;
