import Hero from './sections/hero/Hero.jsx';
import About from './sections/about/About.jsx';
import Projects from './sections/projects/Projects.jsx';
import Skills from './sections/skills/Skills.jsx';
import Contact from './sections/contact/Contact.jsx';
import NavBar from './components/navbar/NavBar.jsx';
import Footer from './components/footer/Footer.jsx';
function App() {
	return (
		<div className="app">
			<NavBar />

			<Hero />
			<About />
			<Projects />
			<Skills />
			<Contact />

			<Footer />
		</div>
	);
}
export default App;
