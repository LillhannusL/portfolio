export const projects = [
	{
		id: 1,
		title: 'CulinaryQuest',
		cat: 'App',
		year: '2026',
		role: 'Fullstack',
		accent: 'var(--accent-terracotta)',
		blurb:
			'A recipe discovery platform designed to take the stress out of meal planning. Whether you have specific ingredients in your fridge or a particular craving, the app provides personalized suggestions to help you get cooking.',
		tags: ['React', 'TypeScript', 'CSS'],
		img: '/projects/image.webp',
		alt: 'CulinaryQuest ingredient search screen with tomato, pasta and pesto tags, a search recipe button and a random recipe option',
		link: 'https://github.com/LillhannusL/FoodApp',
	},
	{
		id: 2,
		title: 'StrajkBowling',
		cat: 'App',
		year: '2025',
		role: 'Frontend',
		accent: 'var(--accent-terracotta)',
		blurb:
			'A lane booking app for a bowling alley, built around a clean multi-step flow — pick a date and time, set your players, choose shoe sizes, and confirm. Focused on getting form validation and state handling right across the whole booking journey.',
		tags: ['React', 'TypeScript', 'Zustand'],
		img: '/projects/strajkbowling.gif',
		alt: 'Animated demo of the StrajkBowling booking form being filled out with date, time, number of bowlers and number of lanes',
		link: 'https://github.com/LillhannusL/strajkBowling',
	},
	{
		id: 3,
		title: 'AI Customer Service Bot',
		cat: 'AI Tool',
		year: '2025',
		role: 'Fullstack',
		accent: 'var(--accent-dusty-rose)',
		blurb:
			'A support chatbot that actually understands conversation, not just single messages. It rewrites follow-up questions using chat history, classifies intent, and pulls relevant answers from a knowledge base before responding — running entirely on a local LLM.',
		tags: ['React', 'LangChain', 'RAG'],
		img: '/projects/customerServiceBot.gif',
		alt: 'Animated demo of the AI customer service chatbot answering a question about products, deliveries and warranties',
		link: 'https://github.com/LillhannusL/customerServiceBot',
	},
];

export const skills = [
	{
		icon: 'react',
		label: 'React',
		note: 'Hooks, component composition, custom hooks',
		level: 70,
	},
	{
		icon: 'nextjs',
		label: 'Next.js',
		note: 'App Router, next/image',
		level: 70,
	},
	{
		icon: 'typescript',
		label: 'TypeScript',
		note: 'Strict mode, generic, typed props',
		level: 70,
	},
	{
		icon: 'tailwind',
		label: 'Tailwind',
		note: 'Design tokens, custom plugins',
		level: 70,
	},
	{
		icon: 'figma',
		label: 'Figma',
		note: 'Prototyping, Autolayout, Design systems',
		level: 65,
	},
	{
		icon: 'zustand',
		label: 'Zustand',
		note: 'Global state, Form flows',
		level: 50,
	},
	{
		icon: 'langchain',
		label: 'LangChain / RAG',
		note: 'RAG, intent classification',
		level: 50,
	},
] as const;

export const tools = ['VS Code', 'Git', 'Figma', 'Vercel'];

export const navLinks = ['Work', 'About', 'Skills', 'Contact'];

export const facts = [
	{ icon: 'book', label: 'Reading' },
	{ icon: 'yarn', label: 'Crocheting' },
	{ icon: 'dumbbell', label: 'Working out' },
	{ icon: 'dice', label: 'Board games' },
];
