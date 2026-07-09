import Hero from './components/Hero';
import Work from './components/Work';
import About from './components/About';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { BackgroundFX } from './components/Background-fx';
import CustomCursor from './components/Custom-cursor';

export default function Home() {
	return (
		<>
			<BackgroundFX mode={'pixels'} />
			<CustomCursor enabled={true} />
			<main id="main-content" tabIndex={-1}>
				<Hero />
				<Work />
				<About />
				<Skills />
				<Contact />
				<Footer />
			</main>
		</>
	);
}
