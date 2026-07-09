'use client';

import { useEffect, useRef } from 'react';
import { useIsDesktop } from './use-media';

/**
 * Custom cursor — a small accent dot with a trailing ring that grows over
 * elements marked `data-cursor="hover"`. Desktop / fine-pointer only.
 */
export default function CustomCursor({ enabled }: { enabled: boolean }) {
	const isDesktop = useIsDesktop();
	const dot = useRef<HTMLDivElement>(null);
	const ring = useRef<HTMLDivElement>(null);
	const label = useRef<HTMLDivElement>(null);
	const pos = useRef({ x: -100, y: -100 });
	const ringPos = useRef({ x: -100, y: -100 });

	const on = enabled && isDesktop;

	useEffect(() => {
		document.body.classList.toggle('cursor-none', on);
		if (!on) return;

		let raf = 0;

		const onMove = (e: MouseEvent) => {
			pos.current = { x: e.clientX, y: e.clientY };
			if (dot.current)
				dot.current.style.transform = `translate3d(${e.clientX}px,${e.clientY}px,0) translate(-50%,-50%)`;
			if (label.current)
				label.current.style.transform = `translate3d(${e.clientX}px,${e.clientY}px,0) translate(16px,14px)`;

			const target = (e.target as HTMLElement)?.closest?.(
				'[data-cursor]',
			) as HTMLElement | null;
			const hover = target?.dataset.cursor === 'hover';
			ring.current?.classList.toggle('cc-hover', !!hover);
			dot.current?.classList.toggle('cc-hover', !!hover);

			if (label.current) {
				const text = target?.dataset.cursorLabel;
				label.current.textContent = text ?? '';
				label.current.style.opacity = text ? '1' : '0';
			}
		};
		const onDown = () => ring.current?.classList.add('cc-press');
		const onUp = () => ring.current?.classList.remove('cc-press');

		const loop = () => {
			ringPos.current.x += (pos.current.x - ringPos.current.x) * 0.18;
			ringPos.current.y += (pos.current.y - ringPos.current.y) * 0.18;
			if (ring.current)
				ring.current.style.transform = `translate3d(${ringPos.current.x}px,${ringPos.current.y}px,0) translate(-50%,-50%)`;
			raf = requestAnimationFrame(loop);
		};

		window.addEventListener('mousemove', onMove);
		window.addEventListener('mousedown', onDown);
		window.addEventListener('mouseup', onUp);
		loop();

		return () => {
			window.removeEventListener('mousemove', onMove);
			window.removeEventListener('mousedown', onDown);
			window.removeEventListener('mouseup', onUp);
			cancelAnimationFrame(raf);
			document.body.classList.remove('cursor-none');
		};
	}, [on]);

	if (!on) return null;

	return (
		<>
			<div
				ref={ring}
				className="cc-ring fixed left-0 top-0 z-9300 h-8.5 w-8.5 rounded-full border border-line-strong pointer-events-none transition-[width,height,background,border-color] duration-300 ease-smooth"
			/>
			<div
				ref={dot}
				className="cc-dot fixed left-0 top-0 z-9400 h-1.5 w-1.5 rounded-full bg-terracotta pointer-events-none transition-[width,height] duration-200 ease-smooth"
			/>
			<div
				ref={label}
				className="fixed left-0 top-0 z-9500 rounded-md bg-terracotta px-1.75 py-0.75 font-mono text-[10px] tracking-wide text-accent-ink opacity-0 pointer-events-none transition-opacity duration-200 whitespace-nowrap"
			/>
			<style jsx global>{`
				.cc-ring.cc-hover {
					width: 62px;
					height: 62px;
					border-color: transparent;
					background: color-mix(
						in oklab,
						var(--accent-terracotta) 16%,
						transparent
					);
				}
				.cc-dot.cc-hover {
					width: 8px;
					height: 8px;
				}
				.cc-ring.cc-press {
					width: 26px;
					height: 26px;
				}
			`}</style>
		</>
	);
}
