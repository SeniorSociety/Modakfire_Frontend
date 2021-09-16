import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Card from '../../components/Card/Card';
import History from '../../components/History/History';
import Introduce from '../../components/Introduce/Introduce';

const NameCard = () => {
	interface userInfoProps {
		userImage: string;
		userName: string;
		userEmail: string;
		userLocal: string;
		userSlogan: string;
	}

	const [userImage, setUserImage] = useState();
	const [userName, setUserName] = useState();
	const [userEmail, setUserEmail] = useState();
	const [userLocal, setUserLocal] = useState();
	const [userSlogan, setUserSlogan] = useState();

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
				userImage={userImage}
				userName={userName}
				userEmail={userEmail}
				userLocal={userLocal}
				userSlogan={userSlogan}
			/>
			<History />
			<Introduce />
		</div>
	);
};

export default NameCard;
