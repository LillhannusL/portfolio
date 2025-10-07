import React from 'react';
import './about.css';
import Button from '../../components/button/Button';

function About() {
	return (
		<div className="about">
			<h1 id="about">About</h1>
			<p>
				My name is Lisa Lillhannus, and I’m currently studying Front-End
				Development. <br />
				I love combining creative design with clean code, transforming static
				designs into engaging web experiences using React and CSS. <br />
				I’m always eager to learn new techniques to create better and more
				accessible digital solutions.
				<br />
				<br />
				In my free time, I enjoy hands-on creativity, whether it’s crocheting,
				painting, knitting, or pottery. I thrive on the challenge of blending
				creativity, precision, and functionality.
			</p>
		</div>
	);
}

export default About;
