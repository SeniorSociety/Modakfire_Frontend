import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import MainSlider from '../../components/MainSlider/MainSlider';
import axios from 'axios';
import './Main.scss';

const number: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];

function Main() {
	const history = useHistory();
	const [galleryInfo, setGalleryInfo] = useState();
	const [galleryIndex, setGalleryIndex] = useState<number>(0);

	useEffect(() => {
		const getItems = async (pageIndex: number): Promise<void> => {
			try {
				const res = await axios.get('https://www.seso.kr/galleries');
				const result = res.data.MESSAGE;
				setGalleryInfo(result);
			} catch (error) {
				console.log(error);
			}
		};
	}, []);

	return (
		<>
			<MainSlider />
			<div className="bodyContainer">
				<ul className="menuContainer">
					{number.slice(0, 9).map(props => (
						<li
							className="menu"
							key={props}
							onClick={() => {
								history.push('');
							}}
						>
							<img
								src="https://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
								alt="*"
								className="menuImage"
							/>
							<span className="imageName">사진</span>
						</li>
					))}
				</ul>
			</div>
		</>
	);
}

export default Main;
