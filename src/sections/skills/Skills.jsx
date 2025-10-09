import React from 'react';
import './skills.css';

const skills = [
	{ name: 'HTML' },
	{ name: 'CSS' },
	{ name: 'JavaScript' },
	{ name: 'React' },
	{ name: 'Git & GitHub' },
	{ name: 'Node.js' },
];

function Skills() {
	return (
		<div id="skills" className="skills">
			{skills.map((skill, i) => (
				<div key={i} className="skill_bubble">
					{skill.name}
				</div>
			))}
		</div>
	);
}

export default Skills;
