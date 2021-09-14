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
	);
export default History;
