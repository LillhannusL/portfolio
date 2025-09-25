import React from 'react';
import './card.css';
import Button from '../button/Button';

function Card({ title, text, btnText, btnOnClick }) {
	return (
		<div className="card">
			<h3>{title}</h3>
			<p>{text}</p>
			{btnText && <Button text={btnText} onClick={btnOnClick} />}
		</div>
	);
}

export default Card;
