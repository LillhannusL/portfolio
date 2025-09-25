import React from 'react';
import './about.css';
import Card from '../../components/card/Card';
import Button from '../../components/button/Button';

function About() {
	return (
		<div className="about">
			<Card
				title="About Me"
				text={`Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia
				distinctio eos laudantium id quos dignissimos hic at quisquam nihil!
				Esse accusantium nemo, asperiores consequatur ratione rem sapiente
				recusandae voluptatibus quasi!`}
			/>
		</div>
	);
}

export default About;
