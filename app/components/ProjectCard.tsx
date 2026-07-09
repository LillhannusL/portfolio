'use client';
import { IconArrowUpRight, IconMaximize } from '@tabler/icons-react';
import Image from 'next/image';
import LightBox from './LightBox';
import { useState } from 'react';

export interface Project {
	id: number;
	title: string;
	cat: string;
	year: string;
	role: string;
	accent: string;
	blurb: string;
	tags: string[];
	img: string;
	alt: string;
	link: string;
}

interface ProjectCardProps {
	project: Project;
	movedRef: React.MutableRefObject<number>;
}

function PlaceholderImg({
	label,
	accent = 'var(--accent)',
}: {
	label: string;
	accent?: string;
}) {
	const hasVar = typeof accent === 'string' && accent.includes('var(');
	const bgGradient = hasVar
		? `color-mix(in oklab, ${accent} 22%, transparent)`
		: accent;

	return (
		<div
			className="relative overflow-hidden rounded-xl border border-border-strong bg-surface h-47 shrink-0 mb-4"
			style={{
				background: `repeating-linear-gradient(135deg, rgba(236,230,223,.045) 0 2px, transparent 2px 11px), var(--surface)`,
			}}
		>
			<div
				className="absolute inset-0"
				style={{
					background: `radial-gradient(70% 60% at 30% 20%, ${bgGradient}, transparent 70%)`,
				}}
			/>
			<span className="mono absolute left-3.5 bottom-3 text-sm text-text-soft tracking-wider inline-flex items-center gap-1.5">
				<span
					className="w-1.5 h-1.5 rounded-full"
					style={{ background: accent }}
				/>
				{label}
			</span>
		</div>
	);
}

function ProjectImg({
	src,
	alt,
	accent,
	onExpand,
}: {
	src: string;
	alt: string;
	accent: string;
	onExpand?: () => void;
}) {
	const isGif = src.toLowerCase().endsWith('.gif');

	return (
		<button
			type="button"
			onClick={(e) => {
				e.stopPropagation();
				onExpand?.();
			}}
			aria-label={`View larger image: ${alt}`}
			className="group relative overflow-hidden rounded-xl border border-border-strong bg-surface h-47 shrink-0 mb-4 w-full cursor-pointer"
		>
			<Image
				src={src}
				alt={alt}
				fill
				sizes="(min-width: 640px) 452px, 85vw"
				className="object-cover object-top"
				unoptimized={isGif}
			/>
			<span
				className="absolute inset-0 pointer-events-none"
				style={{
					background: `linear-gradient(to top, color-mix(in oklab, ${accent} 18%, transparent), transparent 40%)`,
				}}
			/>
			<span className="absolute inset-0 flex items-center justify-center bg-bg-deep/0 group-hover:bg-bg-deep/30 transition-colors">
				<IconMaximize
					stroke={2}
					className="opacity-0 group-hover:opacity-100 text-text-primary transition-opacity"
				/>
			</span>
		</button>
	);
}

export default function ProjectCard({ project, movedRef }: ProjectCardProps) {
	const [lightboxOpen, setLightboxOpen] = useState(false);

	return (
		<article
			className="w-[85vw] sm:w-113 shrink-0 snap-center bg-surface p-6 rounded-3xl border border-text-muted flex flex-col gap-3.5"
			onClick={(e) => {
				if (movedRef.current > 6) e.preventDefault();
			}}
		>
			{project.img ? (
				<ProjectImg
					src={project.img}
					alt={project.alt ?? `Screenshot of ${project.title}`}
					accent={project.accent}
					onExpand={() => setLightboxOpen(true)}
				/>
			) : (
				<PlaceholderImg label={project.img} accent={project.accent} />
			)}

			{lightboxOpen && (
				<LightBox
					src={project.img}
					alt={project.alt ?? `Screenshot of ${project.title}`}
					onClose={() => setLightboxOpen(false)}
				/>
			)}

			<div className="flex flex-col gap-3 flex-1">
				<div className="flex justify-between">
					<span
						className={`font-mono text-xs tracking-wider text-[${project.accent}] )`}
					>
						{project.cat}
					</span>
					<span className="font-mono text-xs tracking-wider text-text-muted">
						{project.year}
					</span>
				</div>
				<h3 className="text-2xl tracking-wider font-serif md:text-3xl">
					{project.title}
				</h3>
				<p className="text-md text-text-soft max-w-90">{project.blurb}</p>

				<div className="mt-auto flex gap-3 flex-wrap md:mt-6 md:mb-2">
					{project.tags.map((tag) => (
						<span
							key={tag}
							className="font-mono text-xs tracking-wider text-text-soft border border-border-strong px-3 py-1 rounded-lg"
						>
							{tag}
						</span>
					))}
				</div>

				<hr className="bg-transparent border-b border-text-muted" />

				<div className="flex items-center justify-between pt-1">
					<p className="text-sm text-text-soft">{project.role}</p>
					<button className="mt-2 flex items-center gap-1 text-sm font-medium hover:underline">
						<a href={project.link}>View case study</a>
						<IconArrowUpRight stroke={2} size={16} />
					</button>
				</div>
			</div>
		</article>
	);
}
