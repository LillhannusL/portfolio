import React from 'react';
import './hero.css';
import Button from '../../components/button/Button';

function scrollToProjects() {
	const section = document.getElementById('projects');
	if (section) {
		section.scrollIntoView({ behavior: 'smooth' });
	}
}

function Hero() {
	return (
		<div className="hero">
			<h1 id="hero">Hello! Im Lisa Lillhannus</h1>
			<h2>Im a Front-End developer student</h2>
			<Button btnText="My Projects" btnOnClick={() => scrollToProjects()} />
		</div>
	);
}

export default Hero;
