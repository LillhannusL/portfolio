import React from 'react';
import './hero.css';
import Button from '../../components/button/Button';
import LLt from '../../assets/img/LLt.png';

function scrollToProjects() {
	const section = document.getElementById('projects');
	if (section) {
		section.scrollIntoView({ behavior: 'smooth' });
	}
}

function Hero() {
	return (
		<div className="hero">
			<div className="img_box"></div>
			<img src={LLt} className="hero_img" />
			<section className="hero_content">
				<h1 id="hero">
					Hello! <br />
					I'm Lisa Lillhannus
				</h1>
				<h2>
					A Frontend-Developer student who enjoys creating visually appealing
					and user-friendly websites.
				</h2>
				<Button
					className="hero_Btn"
					btnText="My Projects"
					btnOnClick={() => scrollToProjects()}
				/>
			</section>
			<section></section>
		</div>
	);
}

export default Hero;
