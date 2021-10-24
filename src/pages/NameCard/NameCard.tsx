import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';
import { API } from '../../config';
import Card from '../../components/Card/Card';
import History from '../../components/History/History';
import Introduce from '../../components/Introduce/Introduce';
import { ConfigurationServicePlaceholders } from 'aws-sdk/lib/config_service_placeholders';

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

	// 네임카드 데이터 GET

	useEffect(() => {
		axios
			.get(API.NAMECARD, {
				headers: {
					Authorization: localStorage.getItem('TOKEN'),
				},
			})
			.then(res => {
				if (res.data.MESSAGE.name !== null) {
					setData(res.data.MESSAGE);
					setEdit(false);
				}
			})
			.catch(error => console.log(error));
	}, []);

	// 네임카드 데이터 POST

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
				Authorization: localStorage.getItem('TOKEN'),
				'Content-Type': 'multipart/form-data',
			},
		};
		axios
			.post(API.NAMECARD, formData, header)
			.then(res => {
				setEdit(false);
				history.push('/profile');
				alert('명함제작이 완료되었습니다');
			})
			.catch(error => {
				console.log(error);
				alert('다시 작성해주세요');
			});
	}

	return (
		<>
			{/* <button
				onClick={() => {
					setEdit(true);
				}}
			>
				수정
			</button> */}
			<div>
				<Card
					edit={edit}
					data={data}
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
					data={data}
					edit={edit}
					introduce={introduce}
					setIntroduce={setIntroduce}
					handleUploadData={handleuploadData}
				/>
			</div>
		</>
	);
};

export default NameCard;
