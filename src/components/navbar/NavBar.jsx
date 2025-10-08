import React from 'react';
import './navbar.css';

function NavBar() {
	return (
		<nav className="navbar">
			<h1 className="navbar_name" href="#home">
				L.Lillhannus
			</h1>
			<ul className="navbar_links">
				<li>
					<a href="#about">About</a>
				</li>
				<li>
					<a href="#projects">Projects</a>
				</li>
				<li>
					<a href="#skills">Skills</a>
				</li>
				<li>
					<a href="#contact">Contact</a>
				</li>
			</ul>
		</nav>
	);
}

export default NavBar;
