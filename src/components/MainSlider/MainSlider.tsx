import React from 'react';
import { useHistory } from 'react-router';
import Slider from 'react-slick';
import './MainSlider.scss';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

function MainSlider(props: any) {
	const history = useHistory();
	const settings = {
		infinite: true,
		slidesToShow: 1,
		slidesToScroll: 1,
		autoplay: true,
		autoplaySpeed: 5000,
		pauseOnHover: true,
		arrows: false,
	};

	const moveTo = (id: number) => {
		history.push(`/board-list/${id}`);
	};

	return (
		<Slider {...settings}>
			{props.props.map(props => (
				<div className="mainSlider" key={props.gallery_id}>
					<img src={props.gallery_image} alt={props.gallery_id} className="slideImage" />
					<div
						className="spanContainer"
						onClick={() => {
							moveTo(props.gallery_id);
						}}
					>
						<span className="phrase">{props.gallery_name}에 관심 있으신가요?</span>
					</div>
				</div>
			))}
		</Slider>
	);
}

export default MainSlider;
