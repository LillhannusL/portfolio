import { facts } from '../data';
// import { IconChevronDown } from '@tabler/icons-react';
import { iconMap } from './IconMap';

export default function About() {
	return (
		<section id="about" className="md:mt-40">
			<div className="flex gap-2 items-center pb-4">
				<p className="font-mono text-terracotta text-sm tracking-widest font-semibold">
					(02)
				</p>
				<h2 className="font-serif text-2xl md:text-5xl">About</h2>
			</div>
			<span className="font-mono text-xs text-text-muted uppercase tracking-wider">
				A developer with an eye for details
			</span>

			<p className="font-serif text-lg tracking-wide py-6 md:text-2xl md:max-w-140">
				I'm a junior frontend developer in Stockholm, passionate about the
				intersection between code and design.
			</p>
			<p className="text-text-soft tracking-wide pb-3 md:text-lg">
				I care about how things <em>feel</em>. the micro-interactions, the empty
				states, the loading skeletons.
			</p>
			<p className="text-text-soft tracking-wide pb-6 md:text-lg">
				Away from the keyboard you'll find me with a <em>book</em>, a
				half-finished <em>crochet</em> project, at the <em>gym</em> or at a
				table full of board games and friends.
			</p>

			<div className="flex gap-2 flex-wrap md:gap-4">
				{facts.map((fact) => {
					const Icon = iconMap[fact.icon];
					return (
						<span
							key={fact.label}
							className="font-mono inline-flex items-center justify-center text-center gap-2 text-xs px-3 py-2 rounded-xl border border-(--soft) text-text-soft md:px-4 md:py-3"
						>
							{Icon && <Icon className="h-5 w-5 text-terracotta " />}
							{fact.label}
						</span>
					);
				})}
			</div>
		</section>
	);
}
