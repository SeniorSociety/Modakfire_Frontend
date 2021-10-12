import React from 'react';
import Slider from 'react-slick';
import './MainSlider.scss';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { OmitProps } from 'antd/lib/transfer/ListBody';

function MainSlider(props: any) {
	const settings = {
		infinite: true,
		slidesToShow: 1,
		slidesToScroll: 1,
		autoplay: true,
		autoplaySpeed: 5000,
		pauseOnHover: true,
		arrows: false,
	};

	return (
		<Slider {...settings}>
			{props.props.map(props => (
				<div className="mainSlider" key={props.gallery_id}>
					<img src={props.gallery_image} alt={props.gallery_id} className="slideImage" />
					<div className="spanContainer">
						<span className="phrase">{props.gallery_name}</span>
					</div>
				</div>
			))}
		</Slider>
	);
}

export default MainSlider;
