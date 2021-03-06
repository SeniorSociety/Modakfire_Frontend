import React, { useState, useRef } from 'react';
import 'antd/dist/antd.css';
import './History.scss';

interface Inputs {
	id?: number;
	year: string;
	title: string;
	subtitle: string;
}

interface editProps {
	edit?: boolean;
	data?: any;
	setHistoryYear?: () => string;
	setHistoryTitle?: () => string;
	setHistorySubTitle?: () => string;
}

function History({ edit, data, setHistoryYear, setHistoryTitle, setHistorySubTitle }) {
	const [addHistory, setAddHistory] = useState<number[]>([0]);
	const [histories, setHistories] = useState<any[]>([]);

	const historyYear = useRef<HTMLInputElement>();
	const historyTitle = useRef<HTMLInputElement>();
	const historySubTitle = useRef<HTMLInputElement>();

	function createHistory(e: any): void {
		const { value } = e.target;
		setHistoryYear(prev => prev.concat(historyYear.current.value));
		setHistoryTitle(prev => prev.concat(historyTitle.current.value));
		setHistorySubTitle(prev => prev.concat(historySubTitle.current.value));
		setAddHistory(addHistory.concat(1));
	}

	return (
		<>
			<div className="historyContainer">
				<div className="line"></div>
				<header className="workTitle">
					<div className="square"></div>이력
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
												ref={historyYear}
											/>
										</div>
										<div className="yearIcon"></div>
									</div>
									<div className="rightContainer">
										<input
											name="title"
											type="text"
											className="title"
											placeholder="예시) 교장선생님"
											ref={historyTitle}
										/>
										<input
											name="subtitle"
											type="text"
											className="subtitle"
											placeholder="예시) 시소중학교 마포구 서울시"
											ref={historySubTitle}
										/>
									</div>
								</section>
							);
						})}
						<input type="button" className="add" value="+" onClick={createHistory} />
					</>
				) : (
					<>
						{data.works?.map((data, index: number) => {
							return (
								<section key={index} className="workContainer">
									<div className="leftContainer">
										<div className="yearContainer">
											<span>{data.year}</span>
										</div>
										<div className="yearIcon"></div>
									</div>
									<div className="rightContainer">
										<div className="title">{data.title}</div>
										<div className="subtitle">{data.subtitle}</div>
									</div>
								</section>
							);
						})}
					</>
				)}
			</div>
		</>
	);
}

export default History;
