import React from 'react';
import './navbar.css';
import DarkModeToggle from '../darkmodetoggle/DarkModeToggle.jsx';

function NavBar() {
	return (
		<div className="NavBar">
			<h1 className="NavBar_name">L.Lillhannus</h1>
			<DarkModeToggle />
		</div>
	);
}

export default NavBar;
