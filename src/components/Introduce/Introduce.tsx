import React from 'react';
import { useState } from 'react';
import './Introduce.scss';

interface editProps {
	edit: boolean;
	handleUploadData: (e: any) => void;
	setIntroduce: (introduce: string) => void;
	introduce: string;
}
function Introduce({ edit, handleUploadData, introduce, setIntroduce }: editProps) {
	const [contents, setContents] = useState<number>(0);

	function handleCount(e: any): void {
		setContents(e.target.value.length);
		setIntroduce(e.target.value);
	}

	return (
		<>
			{edit ? (
				<>
					<section className="introduceContainer">
						<div className="square"></div>
						<div className="line"></div>
						<div className="leftContainer"></div>
						<div className="introduceRightContainer">
							<header>소개 및 관심사</header>
							<textarea
								placeholder="자신을 소개해주세요"
								maxLength={300}
								required={true}
								onChange={e => handleCount(e)}
							></textarea>
							<div className="countWord">글자 수 : {contents} / 300</div>
						</div>
					</section>
					<input
						type="button"
						className="introducePost"
						value="작  성  완  료"
						onClick={(e: any) => handleUploadData(e)}
					/>
				</>
			) : (
				<section className="introduceContainer">
					<div className="square"></div>
					<div className="line"></div>
					<div className="leftContainer"></div>
					<div className="introduceRightContainer">
						<header>소개 및 관심사</header>
						<article>{introduce}</article>
					</div>
				</section>
			)}
		</>
	);
}

export default Introduce;
