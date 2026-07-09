import {
	FaReact,
	FaFigma,
	FaNodeJs,
	FaBook,
	FaDumbbell,
	FaDice,
} from 'react-icons/fa';
import { PiYarn } from 'react-icons/pi';
import { GiBearHead } from 'react-icons/gi';
import {
	SiNextdotjs,
	SiTypescript,
	SiTailwindcss,
	SiLangchain,
} from 'react-icons/si';
import type { IconType } from 'react-icons';

export const iconMap: Record<string, IconType> = {
	react: FaReact,
	nextjs: SiNextdotjs,
	typescript: SiTypescript,
	tailwind: SiTailwindcss,
	figma: FaFigma,
	node: FaNodeJs,
	zustand: GiBearHead,
	langchain: SiLangchain,
	book: FaBook,
	yarn: PiYarn,
	dumbbell: FaDumbbell,
	dice: FaDice,
};
