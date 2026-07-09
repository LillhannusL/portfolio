import { Newsreader, Hanken_Grotesk, JetBrains_Mono } from 'next/font/google';
import './globals.css';

import Navbar from './components/Navbar';

export const metadata = {
	// metadataBase: new URL('https://'),
	title: 'Lisa Lillhannus - Frontend Developer',
	description:
		'Frontend developer in Stockholm with a background in light design. Building clean interfaces with React, Next.js and TypeScript.',
	keywords: [
		'Lisa Lillhannus',
		'Frontend Developer',
		'React',
		'Next.js',
		'TypeScript',
		'Tailwind CSS',
		'Stockholm',
	],
	openGraph: {
		title: 'Lisa Lillhannus - Frontend Developer',
		description:
			'Frontend developer in Stockholm with a background in light design. Building clean interfaces with React, Next.js and TypeScript.',
		// url: 'https://lillhannus.dev',
		siteName: 'Lisa Lillhannus',
		locale: 'en_US',
		type: 'website',
	},
	twitter: {
		card: 'summary',
		title: 'Lisa Lillhannus — Frontend Developer',
		description:
			'Frontend developer in Stockholm with a background in light design.',
	},
};

const newsReader = Newsreader({
	subsets: ['latin'],
	variable: '--font-newsreader',
});
const hankenGrotesk = Hanken_Grotesk({
	subsets: ['latin'],
	variable: '--font-hanken-grotesk',
});
const jetBrainsMono = JetBrains_Mono({
	subsets: ['latin'],
	variable: '--font-jetbrains-mono',
});

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html
			lang="en"
			className={`${newsReader.variable} ${hankenGrotesk.variable} ${jetBrainsMono.variable} h-full antialiased`}
		>
			<body
				className="min-h-full flex flex-col bg-bg-main text-text-primary font-sans px-6 
			md:px-50 cursor-none"
			>
				<a href="#main-content" className="skip-link">
					Skip to content
				</a>
				<Navbar />
				{children}
			</body>
		</html>
	);
}
