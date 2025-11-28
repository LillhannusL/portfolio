import React from 'react';
import './projects.css';
import { Card, CardContent } from '../../components/card/Card';
import Button from '../../components/button/Button';
import shuiImg from '../../assets/img/shui.png';
import whereitsImg from '../../assets/img/whereits@.png';
import strajkImg from "../../assets/img/strajkbowling.png"

const projects = [
	{
		title: 'Shui Messages',
		description:
			'A school project where I created a messaging application with a simple backend and frontend. Users can send and receive messages in real	time. Through this project, i gained hands-on experience building full-stack applications',
		img: shuiImg,
		link: 'https://github.com/LillhannusL/message-app.git',
	},
	{
		title: 'WhereIts@',
		description:
			'A school project where I developed an application for purchasing and viewing tickets for various events. This project helped me deepen my knowlege of react and gain experience building functional user interfaces.',
		img: whereitsImg,
		link: 'https://github.com/LillhannusL/individuell-WhereIts-.git',
	},
	{
		title: 'Strajk Bowling',
		description:
			'A school project where I developed a mobile-first booking application for a new bowling hall. Built with React and TypeScript, the app allows users to, book lanes, reserve bowling shoes, receive a confirmation and handle intermittent server errors. This project taught me how to build a fully typed React application with TypeScript and implement dynamic form validation based on user input.',
		img: strajkImg,
		link: 'https://github.com/LillhannusL/strajkBowling',
	},
];

const handleClick = (url) => {
	window.open(url, '_blank');
};

function Projects() {
	return (
		<div id="projects" className="project">
			{projects.map((project, i) => (
				<Card className="project_card" key={i}>
					<h3>{project.title}</h3>
					<img src={project.img} alt={project.title} />
					<CardContent className="project_content">
						<p className="project_text">{project.description}</p>
						<Button
							className="project_btn"
							btnText={'Show Project'}
							btnOnClick={() => handleClick(project.link)}
						/>
					</CardContent>
				</Card>
			))}
		</div>
	);
}

export default Projects;
