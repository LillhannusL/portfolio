import React from 'react';
import './darkmodetoggle.css';
import { useState, useEffect } from 'react';

function DarkModeToggle() {
	const [dark, setDark] = useState(false);

	useEffect(() => {
		if (dark) {
			document.body.classList.add('dark-mode');
		} else {
			document.body.classList.remove('dark-mode');
		}
	}, [dark]);
	return (
		<button className="darkmodetoggle-button" onClick={() => setDark(!dark)}>
			{!dark ? '🌙' : '☀️'}
		</button>
	);
}
export default DarkModeToggle;
