import { useState } from 'react';

// REGOLE FONDAMENTALI PER UTILIZZARE GLI HOOKS:
// 1) Gli hooks si possono usare SOLTANTO nel functional
// 2) Gli hooks si DEVONO dichiarare in cima al component, prima del return, AL DI FUORI di qualsiasi ciclo

const UseState = () => {
	// Se fosse un class component:

	// state = {
	//     counter: 0,
	//     mostra: false
	// }

	// this.setState({
	//     counter: counter + 1
	// });

	// const pippo = gestisciStato();
	// pippo[0];
	// pippo[1];

	const [counter, setCounter] = useState(0);
	const [mostra, setMostra] = useState(false);

	// const [oggetto, setOggetto] = gestisciStato({counter: 0, mostra: false});
	// setOggetto({
	// ...oggetto,
	// counter: counter + 1
	// });

	return (
		<div>
			<h1>useState</h1>
			<p>
				l'hook useState consente a un functional component di gestire lo
				state
			</p>
			<p>Il valore corrente di counter è: {counter}</p>
			<button onClick={() => setCounter(counter + 1)}>Incrementa</button>
			<div>
				<p>
					Il contenuto nascosto è {' '}
					<span onClick={() => setMostra(true)}>segreto!</span>! Trova
					il pulsante nascosto...
				</p>
			</div>
			{mostra && (
					<h2>SEZIONE SEGRETA!</h2>
			)}
		</div>
	);
};

export default UseState;
