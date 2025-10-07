import React from 'react';
import './navbar.css';
import { useState, useEffect } from 'react';

function NavBar() {
	return (
		<nav className="navbar">
			<div className="navbar_container">
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
			</div>
		</nav>
	);
}

export default NavBar;
