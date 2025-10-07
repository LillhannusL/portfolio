import React from 'react';
import './footer.css';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import Button from '../button/Button';

const handleClick = () => {
	console.log('clicked!');
};

function Footer() {
	return (
		<footer id="contact" className="footer">
			<p className="footer-copy">© {new Date().getFullYear()} L.Lillhannus</p>
			<button
				className="footer_btn"
				onClick={() =>
					(window.location.href =
						'mailto:lillhannus.lisa@gmail.com?subject=Hej!&body=Jag vill kontakta dig!')
				}
			>
				Say hi 👋
			</button>
			<div className="footer_links">
				<a
					href="https://www.linkedin.com/in/lisa-lillhannus-873133358/"
					target="_blank"
					rel="noopener noreferrer"
				>
					<FaLinkedin size={24} />
				</a>
				<a
					href="https://github.com/LillhannusL"
					target="_blank"
					rel="noopener noreferrer"
				>
					<FaGithub size={24} />
				</a>
			</div>
		</footer>
	);
}

export default Footer;
