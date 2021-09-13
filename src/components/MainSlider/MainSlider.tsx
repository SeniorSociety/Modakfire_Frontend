import React from 'react';
import { useHistory } from 'react-router-dom';
import Slider from 'react-slick';
import './MainSlider.scss';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

function MainSlider() {
	const history = useHistory();
	const settings = {
		infinite: true,
		slidesToShow: 1,
		slidesToScroll: 1,
		autoplay: true,
		autoplaySpeed: 5000,
		pauseOnHover: true,
	};

	const numbers: number[] = [1, 2, 3, 4, 5];

	function toBoard(): void {
		history.push('/Board');
	}

	return (
		<Slider {...settings}>
			{numbers.map(props => (
				<div className="mainSlider" onClick={() => toBoard()}>
					<img
						src="https://images.unsplash.com/photo-1547822686-8ba163e1122a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1865&q=80"
						alt="slide"
						className="slideImage"
					/>
					<div className="spanContainer">
						<span className="phrase">나와 비슷한 친구를 만난다</span>
					</div>
				</div>
			))}
		</Slider>
	);
}

export default MainSlider;
