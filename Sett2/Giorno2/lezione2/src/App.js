import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Col, Container, Row } from 'react-bootstrap';
import Tabella from './components/Tabella';
import Dettaglio from './components/Dettaglio';
// import { Component } from 'react'; Eliminiamo l'import di Component per trasformare App.js in un functional component
import { useState } from 'react';

// class App extends Component { Trasformazione del class component in functional component
const App = () => {
	// Non possiamo più utilizzare state e setState, ma utilizzeremo useState

	// state = {
	// 	selected: undefined, // diventerà "Valore 1", "Valore 2", "Valore 3"
	// };

	const [selected, setSelected] = useState(undefined);

	// L'unico modo per settare lo state di App è fare setState in App

	// Con il class component dovevamo eseguire il setState nel modo consueto
	// setStateOfApp = nuovaSelezione => {
	// 	this.setState({
	// 		selected: nuovaSelezione,
	// 		// nuovaSelezione sarà "Valore 1", "Valore 2" o "Valore 3"
	// 	});
	// };

	// Con il functional component ci basta chiamare il metodo definito nello useState passandogli il nuovo valore
	const setStateOfApp = (nuovaSelezione) => {
		setSelected(nuovaSelezione);
	}

	// Eliminiamo il render perché non presente nei functional components
	// render() {
		return (
			<div className="App">
				<header className="App-header">
					<Container>
						<Row>
							<Col>
								<Tabella
								// Non serve la keyword this, in quanto non siamo in un class component
									// selected={this.state.selected} // Tabella riceve IN LETTURA il valore corrente
									// setStateOfApp={this.setStateOfApp} // Tabella riceve il modo per CAMBIARE il valore di selected
									selected = {selected} // Tabella riceve IN LETTURA il valore corrente
									setStateOfApp = {setStateOfApp} // Tabella riceve il modo per CAMBIARE il valore di selected
								/>
							</Col>
							<Col className="my-auto">
							{/* Dettaglio riceve IN LETTURA il valore dello stato */}
								{/* <Dettaglio selected={this.state.selected} /> */}
								<Dettaglio selected = {selected} />
							</Col>
						</Row>
					</Container>
				</header>
			</div>
		);
	}
// }

export default App;
