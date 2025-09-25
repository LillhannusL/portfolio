import React from 'react';
import './button.css';

function Button({ btnText, btnOnClick }) {
	return (
		<button className="button" onClick={btnOnClick}>
			{btnText}
		</button>
	);
}

export default Button;
