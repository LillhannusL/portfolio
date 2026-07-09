'use client';

import { useState } from 'react';
import { navLinks } from '../data';
import { IconXFilled, IconMenu2 } from '@tabler/icons-react';

export default function Navbar() {
	const [menuOpen, setMenuOpen] = useState(false);

	const scrollTo = (id: string) => {
		document
			.getElementById(id.toLowerCase())
			?.scrollIntoView({ behavior: 'smooth' });
		setMenuOpen(false);
	};

	const goTo = (id: string) => (e: any) => {
		e.preventDefault();
		const el = document.getElementById(id);
		if (el) window.scrollTo({ top: el.offsetTop - 70, behavior: 'smooth' });
	};

	return (
		<>
			<nav className="fixed top-0 left-0 right-0 z-100 flex items-center justify-between px-6 py-4 backdrop-blur-lg">
				<div>
					<a
						href="#top"
						onClick={goTo('top')}
						className="inline-flex items-center decoration-none"
					>
						{/* Initials */}
						<span className="border border-white/20 py-1 px-2 mr-2 rounded-lg font-serif">
							LL
						</span>
					</a>
					{/* Name, hidden on mobile */}
					<span className="invisible font-serif font-extralight tracking-wide sm:visible">
						Lisa Lillhannus
					</span>
				</div>

				{/* Links on desktop */}
				<div className="hidden md:flex gap-8">
					{navLinks.map((link) => (
						<button
							key={link}
							onClick={() => scrollTo(link)}
							className="transition-colors hover:opacity-60"
						>
							{link}
						</button>
					))}
				</div>

				{/* Links on mobile */}
				<button
					className="md:hidden text-sm font-medium backdrop-blur-lg"
					onClick={() => setMenuOpen(!menuOpen)}
					aria-label={menuOpen ? 'Close menu' : 'Open menu'}
					aria-expanded={menuOpen}
					aria-controls="mobile-menu"
				>
					{menuOpen ? <IconXFilled /> : <IconMenu2 stroke={2} />}
				</button>
			</nav>

			{menuOpen && (
				<div
					id="mobile-menu"
					className="fixed inset-0 z-40 flex flex-col items-center justify-center gap-8 bg-surface/50 backdrop-blur-lg"
				>
					{navLinks.map((link) => (
						<button
							key={link}
							onClick={() => scrollTo(link)}
							className="text-2xl font-medium"
						>
							{link}
						</button>
					))}
				</div>
			)}
		</>
	);
}
