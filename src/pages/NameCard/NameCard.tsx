import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Card from '../../components/Card/Card';
import History from '../../components/History/History';
import Introduce from '../../components/Introduce/Introduce';

const NameCard = () => {
	const [edit, setEdit] = useState<boolean>(true);

	const [userImage, setUserImage] = useState<string>('');
	const [userName, setUserName] = useState<string>('');
	const [userSlogan, setUserSlogan] = useState<string>('');
	const [userEmail, setUserEmail] = useState<string>('');
	const [userLocal, setUserLocal] = useState<string>('');

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
				setUserImage={setUserImage}
				setUserName={setUserName}
				setUserSlogan={setUserSlogan}
				setUserEmail={setUserEmail}
				setUserLocal={setUserLocal}
			/>
			<History
				edit={edit}
				historyYear={historyYear}
				historyTitle={historyTitle}
				historySubTitle={historySubtitle}
				setHistoryYear={setHistoryYear}
				setHistoryTitle={setHistoryTitle}
				setHistorySubTitle={setHistorySubtitle}
			/>
			<Introduce edit={edit} introduce={introduce} setIntroduce={setIntroduce} />
		</div>
	);
};

export default NameCard;
