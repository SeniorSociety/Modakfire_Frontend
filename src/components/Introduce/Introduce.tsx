import React from 'react';
import { useState } from 'react';
import './Introduce.scss';

interface editPorps {
	edit: boolean;
}
function Introduce({ edit }) {
	const [contents, setContents] = useState<number>(0);

	function handleCount(e: any): void {
		setContents(e.target.value.length);
	}

	return (
		<>
			{edit ? (
				<>
					<section className="introduceContainer">
						<div className="leftContainer"></div>
						<div className="rightContainer">
							<header>✍︎ 소개 및 관심사</header>
							<textarea
								placeholder="자신을 소개해주세요"
								maxLength={300}
								required={true}
								onChange={e => handleCount(e)}
							></textarea>
							<div className="countWord">글자 수 : {contents} / 300</div>
						</div>
					</section>
					<input type="button" className="post" value="작  성  완  료" />
				</>
			) : (
				<section className="introduceContainer">
					<div className="leftContainer"></div>
					<div className="rightContainer">
						<header>✍︎ 소개 및 관심사</header>
						<article>
							저는 올해 초등학교 6학년인 남자아이와 4학년인 여자아이를 자녀로 두고 있는 42살의
							14년차 전업주부 OOO입니다. <br />
							<br /> 미국인과 결혼하신 이모 덕에 어려서부터 영어에 대한 관심이 많았고 영어공부도
							좋아했습니다. 관련해서 더 깊이있게 공부하고 싶었지만 고3 시절 가정형편이 좋지 못한
							전업주부가 되기 전까지는 백화점에서 5년간 근무하며 판매왕, 친절왕으로 여러 번 뽑혔을
							사정으로 대학진학을 통한 공부의 취득하였습니다꿈을 미루고 바로 취직을 하게 됐습니다.
							이후 정도로 제 성격은매사에 끈기가 있고 적극적이며, 주위 사람에게 친절한 편입니다.
							<br />
						</article>
					</div>
				</section>
			)}
		</>
	);
}

export default Introduce;
