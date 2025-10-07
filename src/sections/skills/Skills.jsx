import React from 'react';
import './skills.css';

const skills = [
	{ name: 'React', color: '#61DBFB' },
	{ name: 'CSS', color: '#38BDF8' },
	{ name: 'JavaScript', color: '#F7DF1E' },
	{ name: 'TypeScript', color: '#3178C6' },
	{ name: 'Figma', color: '#A259FF' },
];

function Skills() {
	return (
		<div className="skills">
			<h1 id="skills">Skills</h1>
			<div className="skills_cloud">
				{skills.map((skill, i) => (
					<div
						key={i}
						className="skill_bubble"
						// style={{ backgroundColor: skill.color }}
					>
						{skill.name}
					</div>
				))}
			</div>
		</div>
	);
}

export default Skills;
