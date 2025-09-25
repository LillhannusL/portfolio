import React from 'react';
import './navbar.css';
import DarkModeToggle from '../darkmodetoggle/DarkModeToggle.jsx';
import { useState, useEffect } from 'react';

function NavBar() {
	const [show, setShow] = useState(false);

	useEffect(() => {
		const handleScroll = () => {
			if (window.scrollY > 20) {
				setShow(true);
			} else {
				setShow(false);
			}
		};

		window.addEventListener('scroll', handleScroll);
		return () => window.removeEventListener('scroll', handleScroll);
	}, []);

	return (
		<nav className={`navbar ${show ? 'navbar-show' : 'navbar-hide'}`}>
			<div className="navbar_container">
				<h1 className="navbar_name">L.Lillhannus</h1>
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
				<DarkModeToggle />
			</div>
		</nav>
	);
}

export default NavBar;
