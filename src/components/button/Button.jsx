import React from 'react';
import './button.css';

function Button({ btnText, btnOnClick, className }) {
	return (
		<button className={`button ${className}`} onClick={btnOnClick}>
			{btnText}
		</button>
	);
}

export default Button;
