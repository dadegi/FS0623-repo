import './App.css';
import React from 'react';
import State from './components/State';
import StateClass from './components/StateClass';
import Testo from './components/Testo';

class App extends React.Component {
	constructor(props) {
		super(props);
		// Il componente app istanzia testoRicerca come state e fa il bind del metodo modificaTesto
		this.state = { testoRicerca: '' };
		this.modificaTesto = this.modificaTesto.bind(this);
	}

	// 5. Il metodo modificaTesto, che riceve come parametro dal component Testo il value scritto nel campo di input (riga 22 component Testo), usa questo parametro per fare il setState di testoRicerca

	modificaTesto(testo) {
		this.setState({testoRicerca: testo});
	}

	render() {
		return (
			<div className="App">
				<header className="App-header">
					<h1>Gestire lo stato dei components</h1>
				</header>
				<main>
					<State />
					<hr />
					<StateClass />
					<hr />
					{/* 4. Al component Testo viene passato come props il metodo onChangeTesto, che a sua volta richiama il metodo modificaTesto, mentre la props testoRicerca riceve come valore il valore dello state testoRicerca */}
					<Testo onChangeTesto = {this.modificaTesto} testoRicerca = {this.state.testoRicerca} />
					<h3>{this.state.testoRicerca}</h3>
				</main>
			</div>
		);
	}
}

/* function App() {
	return (
		<div className="App">
			<header className="App-header">
				<h1>Gestire lo stato dei components</h1>
			</header>
			<main>
				<State />
				<hr />
				<StateClass />
			</main>
		</div>
	);
} */

export default App;
