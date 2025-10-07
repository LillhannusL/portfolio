import Hero from './sections/hero/Hero.jsx';
import About from './sections/about/About.jsx';
import Projects from './sections/projects/Projects.jsx';
import Skills from './sections/skills/Skills.jsx';
import NavBar from './components/navbar/NavBar.jsx';
import Footer from './components/footer/Footer.jsx';
import './app.css';

function App() {
	return (
		<div className="app">
			<NavBar />
			<section className="container">
				<Hero />
				<Skills />
				<About />
				<Projects />
			</section>
			<Footer />
		</div>
	);
}
export default App;
