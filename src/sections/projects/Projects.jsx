import React from 'react';
import './projects.css';
import { Card, CardContent } from '../../components/card/Card';
import Button from '../../components/button/Button';
import shuiImg from '../../assets/img/shui.png';
import whereitsImg from '../../assets/img/whereits@.png';

const projects = [
	{
		title: 'Shui Messages',
		description:
			'A project where I created a messaging application with a simple backend and frontend. Users can send and receive messages in real	time. Through this project, i gained hands-on experience building full-stack applications',
		img: shuiImg,
		link: 'https://github.com/LillhannusL/message-app.git',
	},
	{
		title: 'WhereIts@',
		description:
			'A project where I developed an application for purchasing and	viewing tickets for various events. This project helped me deepen my knowlege of react and gain experience building functional user interfaces.',
		img: whereitsImg,
		link: 'https://github.com/LillhannusL/individuell-WhereIts-.git',
	},
];

const handleClick = (url) => {
	window.open(url, '_blank');
};

function Projects() {
	return (
		<div className="projects">
			<h1 id="projects">Projects</h1>
			<div className="project_grid">
				{projects.map((project, i) => (
					<Card className="project_card" key={i}>
						<h3>{project.title}</h3>
						<img src={project.img} alt={project.title} />
						<CardContent>
							<p className="project_text">{project.description}</p>
							<Button
								className="project_btn"
								btnText={'Visa Project'}
								btnOnClick={() => handleClick(project.link)}
							/>
						</CardContent>
					</Card>
				))}
			</div>
		</div>
	);
}

export default Projects;
