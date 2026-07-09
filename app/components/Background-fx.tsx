'use client';

import { useEffect, useRef } from 'react';
import { useReducedMotion } from './use-media';

type BackgroundMode = 'pixels' | 'glow' | 'off';

type Particle = {
	x: number;
	y: number;
	size: number;
	vy: number;
	sway: number;
	phase: number;
	rot: number;
	vr: number;
	alpha: number;
	color: string;
};

export function BackgroundFX({ mode }: { mode: BackgroundMode }) {
	const canvasRef = useRef<HTMLCanvasElement>(null);
	const reduced = useReducedMotion();

	const FX_PALETTE = ['#cd8a6a', '#9fb389', '#d2ab8a', '#cf9a93'];

	useEffect(() => {
		if (mode !== 'pixels') return;
		const cv = canvasRef.current;
		if (!cv) return;
		const ctx = cv.getContext('2d');
		if (!ctx) return;

		let w = 0,
			h = 0,
			raf = 0,
			running = true;
		const dpr = Math.min(window.devicePixelRatio || 1, 2);
		let particles: Particle[] = [];

		const build = () => {
			const n = Math.min(80, Math.round((w * h) / 24000));
			particles = Array.from({ length: n }, () => {
				const size = 2 + Math.random() * 4;
				return {
					x: Math.random() * w,
					y: Math.random() * h,
					size,
					vy: -(0.5 + Math.random() * 0.16),
					sway: 0.2 + Math.random() * 0.5,
					phase: Math.random() * Math.PI * 2,
					rot: Math.random() * Math.PI,
					vr: (Math.random() - 0.5) * 0.004,
					alpha: 0.18 + Math.random() * 0.45,
					color: FX_PALETTE[(Math.random() * FX_PALETTE.length) | 0],
				};
			});
		};

		const resize = () => {
			w = cv.clientWidth;
			h = cv.clientHeight;
			cv.width = w * dpr;
			cv.height = h * dpr;
			ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
			build();
		};

		const draw = () => {
			ctx.clearRect(0, 0, w, h);
			for (const p of particles) {
				if (running) {
					p.y += p.vy;
					p.x += Math.sin(p.phase) * p.sway * 0.2;
					p.phase += 0.005;
					p.rot += p.vr;
					if (p.y < -12) {
						p.y = h + 12;
						p.x = Math.random() * w;
					}
				}
				ctx.save();
				ctx.translate(p.x, p.y);
				ctx.rotate(p.rot);
				ctx.globalAlpha = p.alpha;
				ctx.fillStyle = p.color;
				ctx.shadowColor = p.color;
				ctx.shadowBlur = p.size * 3.2;
				const s = p.size,
					r = s * 0.32;
				ctx.beginPath();
				ctx.moveTo(-s / 2 + r, -s / 2);
				ctx.arcTo(s / 2, -s / 2, s / 2, s / 2, r);
				ctx.arcTo(s / 2, s / 2, -s / 2, s / 2, r);
				ctx.arcTo(-s / 2, s / 2, -s / 2, -s / 2, r);
				ctx.arcTo(-s / 2, -s / 2, s / 2, -s / 2, r);
				ctx.closePath();
				ctx.fill();
				ctx.restore();
			}
			if (!reduced && running) raf = requestAnimationFrame(draw);
		};

		resize();
		draw();
		if (reduced) running = false;

		const onResize = () => resize();
		const onVis = () => {
			running = !document.hidden;
			if (running && !reduced) {
				cancelAnimationFrame(raf);
				raf = requestAnimationFrame(draw);
			}
		};
		window.addEventListener('resize', onResize);
		document.addEventListener('visibilitychange', onVis);

		return () => {
			cancelAnimationFrame(raf);
			window.removeEventListener('resize', onResize);
			document.removeEventListener('visibilitychange', onVis);
		};
	}, [mode, reduced]);

	// if (mode === 'off') return null;

	// if (mode === 'glow') {
	// 	const orbs = [
	// 		{
	// 			c: 'var(--terracotta)',
	// 			x: '12%',
	// 			y: '18%',
	// 			s: 460,
	// 			d: '22s',
	// 			delay: '0s',
	// 		},
	// 		{ c: 'var(--sage)', x: '82%', y: '42%', s: 400, d: '28s', delay: '-6s' },
	// 		{ c: 'var(--sand)', x: '48%', y: '78%', s: 520, d: '25s', delay: '-12s' },
	// 		{ c: 'var(--rose)', x: '70%', y: '10%', s: 340, d: '31s', delay: '-3s' },
	// 	];
	// 	return (
	// 		<div
	// 			aira-hidden
	// 			className="fixed inset-0 z-0 overflow-hidden pointer-events-none"
	// 		>
	// 			{orbs.map((o, i) => (
	// 				<div
	// 					key={i}
	// 					style={{
	// 						position: 'absolute',
	// 						left: o.x,
	// 						top: o.y,
	// 						width: o.s,
	// 						height: o.s,
	// 						marginLeft: -o.s / 2,
	// 						marginTop: -o.s / 2,
	// 						borderRadius: '50%',
	// 						background: `radial-gradient(cicle at 50% 50%, color-mix(in oklab, ${o.c} 44%, transparent), transparent 68%)`,
	// 						filter: 'blur(24px)',
	// 						opacity: 0.5,
	// 						animation: reduced
	// 							? 'none'
	// 							: `orbDrift ${o.d} ease-in-out ${o.delay} infinite`,
	// 						willChange: 'transform',
	// 					}}
	// 				/>
	// 			))}
	// 		</div>
	// 	);
	// }

	return (
		<canvas
			ref={canvasRef}
			aria-hidden
			className="fixed inset-0 z-0 h-full w-full pointer-events-none"
		/>
	);
}
