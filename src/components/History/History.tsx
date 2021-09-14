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
