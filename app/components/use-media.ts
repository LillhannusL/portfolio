'use client';

import { useEffect, useState } from 'react';

export function useMedia(query: string): boolean {
	const [matches, setMatches] = useState(false);

	useEffect(() => {
		const mq = window.matchMedia(query);
		const onChange = (e: MediaQueryListEvent) => setMatches(e.matches);
		setMatches(mq.matches);
		mq.addEventListener('change', onChange);
		return () => mq.removeEventListener('change', onChange);
	}, [query]);

	return matches;
}

export const useIsDesktop = () => useMedia('(hover:hover) and (pointer: fine)');

export const useReducedMotion = () =>
	useMedia('(prefers-reduced-motion: reduce)');
