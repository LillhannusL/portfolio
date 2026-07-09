'use client';

import {
	IconMail,
	IconBrandGithub,
	IconBrandLinkedin,
	IconCheck,
} from '@tabler/icons-react';
import { useState, useRef } from 'react';

const EMAIL = 'lillhannus.lisa@gmail.com';
export default function Contact() {
	const [copied, setCopied] = useState(false);
	const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

	const copyEmail = async () => {
		try {
			if (navigator.clipboard?.writeText) {
				await navigator.clipboard.writeText(EMAIL);
			} else {
				// fallback for older/non-HTTPS contexts
				const textarea = document.createElement('textarea');
				textarea.value = EMAIL;
				textarea.style.position = 'fixed';
				textarea.style.opacity = '0';
				document.body.appendChild(textarea);
				textarea.select();
				document.execCommand('copy');
				document.body.removeChild(textarea);
			}
			setCopied(true);
			if (timeoutRef.current) clearTimeout(timeoutRef.current);
			timeoutRef.current = setTimeout(() => setCopied(false), 2000);
		} catch {
			console.error('Failed to copy email');
		}
	};

	return (
		<section id="contact" className="md:mt-40 md:mb-10">
			<div className="max-w-2xl mx-auto text-center">
				<p className="font-mono text-terracotta uppercase text-sm tracking-wider mt-20">
					Available for projects
				</p>
				<h2 className="font-serif text-4xl my-8 md:text-7xl md:mb-20">
					Let's build something together!
				</h2>

				<div className="relative inline-flex flex-col items-center">
					<button
						title="Right-click to copy email"
						onContextMenu={(e) => {
							e.preventDefault();
							copyEmail();
						}}
						className="flex items-center mx-auto gap-4 bg-terracotta py-3 px-6 rounded-full md:py-6 md:px-10 "
					>
						<IconMail className="text-bg-deep" stroke={2} />
						<a
							href="mailto:lillhannus.lisa@gmail.com"
							className="text-bg-deep text-sm  font-semibold tracking-wider md:text-lg"
						>
							{EMAIL}
						</a>
					</button>

					<span
						role="status"
						aria-live="polite"
						className={`mt-2 flex items-center gap-1.5 font-mono text-xs text-terracotta transition-opacity duration-200 ${
							copied ? 'opacity-100' : 'opacity-0'
						}`}
					>
						<IconCheck size={14} stroke={2} />
						Email copied to clipboard
					</span>

					<span className="mt-1 font-mono text-[11px] text-text-muted tracking-wide">
						Right-click to copy
					</span>
				</div>

				<div className="my-10 flex justify-center gap-6 md:mt-16">
					<button className="flex items-center gap-3 border border-text-soft py-2 px-4 rounded-full hover:text-terracotta transition-colors">
						<IconBrandGithub stroke={1} />
						<a
							href="https://github.com/LillhannusL"
							target="_blank"
							rel="noreferrer"
							className="text-text-soft text-sm"
						>
							GitHub
						</a>
					</button>
					<button className="flex items-center gap-3 border border-text-soft py-2 px-4 rounded-full hover:text-terracotta transition-colors">
						<IconBrandLinkedin stroke={1} />
						<a
							href="https://www.linkedin.com/in/lisa-lillhannus-873133358"
							target="_blank"
							rel="noreferrer"
							className="text-text-soft text-sm"
						>
							LinkedIn
						</a>
					</button>
				</div>
			</div>
		</section>
	);
}
