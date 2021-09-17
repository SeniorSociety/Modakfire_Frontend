import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';
import { API } from '../../config';
import Card from '../../components/Card/Card';
import History from '../../components/History/History';
import Introduce from '../../components/Introduce/Introduce';

const NameCard = () => {
	const history = useHistory();
	const [edit, setEdit] = useState<boolean>(true);

	const [userImage, setUserImage] = useState<string>('');
	const [userName, setUserName] = useState<string>('');
	const [userSlogan, setUserSlogan] = useState<string>('');
	const [userEmail, setUserEmail] = useState<string>('');
	const [userLocal, setUserLocal] = useState<string>('');

	const [historyYear, setHistoryYear] = useState<string[]>([]);
	const [historyTitle, setHistoryTitle] = useState<string[]>([]);
	const [historySubtitle, setHistorySubtitle] = useState<string[]>([]);

	const [introduce, setIntroduce] = useState<string>('');

	const [data, setData] = useState();

	useEffect(() => {
		axios
			.get(API.NAMECARD, {
				headers: {
					Authorization:
						'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6MX0.Te32okoTxCk31WOFbT-LiVhTMcu_5IRPsEum3y930OQ',
				},
			})
			.then(res => {
				setData(res.data.MESSAGE);
				console.log(res);
			})
			.catch(error => {
				console.log(error);
			});
	}, []);

	function handleuploadData(e: any): void {
		const formData = new FormData();
		for (let i = 0; i < historyYear.length; i++) {
			formData.append('historyYear', historyYear[i]);
		}
		for (let i = 0; i < historyTitle.length; i++) {
			formData.append('historyTitle', historyTitle[i]);
		}
		for (let i = 0; i < historySubtitle.length; i++) {
			formData.append('historySubtitle', historySubtitle[i]);
		}
		formData.append('userName', userName);
		formData.append('userSlogan', userSlogan);
		formData.append('userLocal', userLocal);
		formData.append('userEmail', userEmail);
		formData.append('introduce', introduce);
		formData.append('userImage', userImage[0]);
		const header = {
			headers: {
				Authorization:
					'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6MX0.Te32okoTxCk31WOFbT-LiVhTMcu_5IRPsEum3y930OQ',
				'Content-Type': 'multipart/form-data',
			},
		};
		axios.post(API.NAMECARD, formData, header).then(res => {
			history.push(`API.NAMECARD`);
			setEdit(false);
		});

		alert('명함제작이 완료되었습니다');
	}

	console.log(userImage);
	return (
		<div>
			<Card
				edit={edit}
				data={data}
				userImage={userImage}
				setUserImage={setUserImage}
				setUserName={setUserName}
				setUserSlogan={setUserSlogan}
				setUserEmail={setUserEmail}
				setUserLocal={setUserLocal}
			/>
			<History
				edit={edit}
				data={data}
				setHistoryYear={setHistoryYear}
				setHistoryTitle={setHistoryTitle}
				setHistorySubTitle={setHistorySubtitle}
			/>
			<Introduce
				edit={edit}
				introduce={introduce}
				setIntroduce={setIntroduce}
				handleUploadData={handleuploadData}
			/>
		</div>
	);
};

export default NameCard;
