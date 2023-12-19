import './App.css';
import React from 'react';
import State from './components/State';
import StateClass from './components/StateClass';
import Testo from './components/Testo';

class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = { testoRicerca: '' };
		this.modificaTesto = this.modificaTesto.bind(this);
	}

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
