import React from 'react';
import { useHistory } from 'react-router-dom';
import './main.scss';
import MainSlider from '../../components/MainSlider/MainSlider';

const number: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];

function Main() {
	const history = useHistory();

	function toBoard(): void {
		history.push('/Board');
	}

	return (
		<>
			<MainSlider />
			<div className="bodyContainer">
				<ul className="menuContainer">
					{number.slice(0, 9).map(props => (
						<li className="menu" key={props} onClick={() => toBoard()}>
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
