import React, { useState } from 'react';
import 'antd/dist/antd.css';
import './History.scss';
interface Inputs {
	id?: number;
	year: string;
	title: string;
	subtitle: string;
}

interface editProps {
	edit: boolean;
}

function History({ edit }: any) {
	const [addHistory, setAddHistory] = useState<number[]>([0]);
	const [contents, setContents] = useState<Inputs>({
		id: 0,
		year: '',
		title: '',
		subtitle: '',
	});

	const [histories, setHistories] = useState<any[]>([]);

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
		setAddHistory(addHistory.concat(1));
	}

	console.log('이력추가 ', histories);

	return (
		<>
			<div className="historyContainer">
				<div className="line"></div>
				<header className="workTitle">
					이력
					<div className="square"></div>
				</header>
				{edit ? (
					<>
						{addHistory.map(history => {
							return (
								<section key={history} className="workContainer">
									<div className="leftContainer">
										<div className="yearContainer">
											<input
												name="year"
												type="text"
												className="yearInput"
												placeholder="1997"
												onChange={onChangeHandler}
											></input>
										</div>
										<div className="yearIcon"></div>
									</div>
									<div className="rightContainer">
										<input
											name="title"
											type="text"
											className="title"
											placeholder="예시) 교장선생님"
											onChange={onChangeHandler}
										/>
										<input
											name="subtitle"
											type="text"
											className="subtitle"
											placeholder="예시) 시소중학교 마포구 서울시"
											onChange={onChangeHandler}
										/>
									</div>
								</section>
							);
						})}
						<input
							type="button"
							className="add"
							value="추 가 하 기"
							onClick={createHistory}
						></input>
						<input type="button" className="add" value="완 료 하 기" />
					</>
				) : (
					<>
						{histories.map((history, index: number) => {
							return (
								<section key={index} className="workContainer">
									<div className="leftContainer">
										<div className="yearContainer">
											<span>{history.year}</span>
										</div>
										<div className="yearIcon"></div>
									</div>
									<div className="rightContainer">
										<div className="title">{history.title}</div>
										<div className="subtitle">{history.subtitle}</div>
									</div>
								</section>
							);
						})}
						<input type="button" className="add" value="추 가 하 기" />
					</>
				)}
			</div>
		</>
	);
}

export default History;
