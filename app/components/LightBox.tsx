'use client';

import { useRef, useEffect } from 'react';
import Image from 'next/image';
import { IconX } from '@tabler/icons-react';

interface LightBoxProps {
	src: string;
	alt: string;
	onClose: () => void;
}

export default function LightBox({ src, alt, onClose }: LightBoxProps) {
	const closeBtnRef = useRef<HTMLButtonElement>(null);
	const isGif = src.toLowerCase().endsWith('.gif');

	useEffect(() => {
		closeBtnRef.current?.focus();
		const onKey = (e: KeyboardEvent) => {
			if (e.key === 'Escape') onClose();
		};
		document.addEventListener('keydown', onKey);
		document.body.style.overflow = 'hidden';
		return () => {
			document.removeEventListener('keydown', onKey);
			document.body.style.overflow = '';
		};
	}, [onClose]);

	return (
		<div
			role="dialog"
			aria-modal="true"
			aria-label={alt}
			className="fixed inset-0 z-9000 flex items-center justify-center bg-bg-deep/90 backdrop-blur-sm p-6"
			onClick={onClose}
		>
			<button
				ref={closeBtnRef}
				onClick={onClose}
				className="absolute top-6 right-6 p-2 felx items-center justify-center w-11 h-11 rounded-full bg-surface border border-border-strong text-text-primary hover:text-terracotta transition-colors"
			>
				<IconX stroke={2} />
			</button>

			<div
				className="relative h-[80vh] w-[90vw] max-w-2xl"
				onClick={(e) => e.stopPropagation()}
			>
				<Image
					src={src}
					alt={alt}
					fill
					sizes="90vw"
					className="object-contain"
					unoptimized={isGif}
				/>
			</div>
		</div>
	);
}
