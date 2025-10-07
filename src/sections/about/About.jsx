import React from 'react';
import './about.css';
import Button from '../../components/button/Button';

function About() {
	return (
		<div className="about">
			<h1 id="about">About</h1>
			<p>
				Jag heter Lisa Lillhannus och studerar Front-End utveckling. Jag gillar
				att kombinera kreativ design med ren kod och att förvandla färdiga
				designer till levande webbupplevelser med react och css. Jag strävar
				alltid efter att lära mig nya tekniker för att skapa bättre och mer
				tillgängliga digitala lösningar.På fritiden gillar jag att skapa, som
				t.ex. virka, måla, sticka eller dreja - jag gillar utmaningen i att
				kombinera kreativitet, noggrannhet och funktionalitet.
			</p>
		</div>
	);
}

export default About;
