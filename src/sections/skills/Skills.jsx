import React from 'react';
import './skills.css';

const skills = [
	{ name: 'React' },
	{ name: 'CSS' },
	{ name: 'JavaScript' },
	{ name: 'TypeScript' },
	{ name: 'Figma' },
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
