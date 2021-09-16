import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import MainSlider from '../../components/MainSlider/MainSlider';
import { API } from '../../config';
import axios from 'axios';
import './Main.scss';

function Main(props: { match: { params: { id: string } } }) {
	const { id } = props.match.params;
	const history = useHistory();
	const [galleryInfo, setGalleryInfo] = useState([
		{
			gallery_id: 0,
			gallery_name: '',
			gallery_image: '',
		},
	]);

	useEffect(() => {
		const getItems = async (): Promise<void> => {
			try {
				const res = await axios.get(`${API.BOARD}`);
				const result = res.data.MESSAGE;
				setGalleryInfo(result);
			} catch (error) {
				console.log(error);
			}
		};
		getItems();
	}, []);

	return (
		<>
			<MainSlider />
			<div className="bodyContainer">
				<ul className="menuContainer">
					{galleryInfo.map(info => (
						<li
							className="menu"
							key={info.gallery_id}
							onClick={() => {
								history.push(`/galleries/${id}`);
							}}
						>
							<img src={info.gallery_image} alt="*" className="menuImage" />
							<span className="imageName">{info.gallery_name}</span>
						</li>
					))}
				</ul>
			</div>
		</>
	);
}

export default Main;
