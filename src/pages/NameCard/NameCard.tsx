import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Card from '../../components/Card/Card';
import History from '../../components/History/History';
import Introduce from '../../components/Introduce/Introduce';

const NameCard = () => {
	const [edit, setEdit] = useState<boolean>(true);

	const [userImage, setUserImage] = useState();
	const [userName, setUserName] = useState();
	const [userSlogan, setUserSlogan] = useState();
	const [userEmail, setUserEmail] = useState();
	const [userLocal, setUserLocal] = useState();

	const [historyYear, setHistoryYear] = useState();
	const [historyTitle, setHistoryTitle] = useState();
	const [historySubtitle, setHistorySubtitle] = useState();

	const [introduce, setIntroduce] = useState();

	const [data, setData] = useState();

	useEffect(() => {
		axios
			.get('https://www.seso.kr/galleries')
			.then(res => {
				setData(res.data.Message);
			})
			.catch(error => {
				console.log(error);
			});
	}, []);

	function handleuploadData(e: any): void {}

	return (
		<div>
			<Card
				edit={edit}
				userImage={userImage}
				userName={userName}
				userSlogan={userSlogan}
				userEmail={userEmail}
				userLocal={userLocal}
			/>
			<History edit={edit} />
			<Introduce edit={edit} />
		</div>
	);
};

export default NameCard;
