import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Col, Container, Row } from 'react-bootstrap';
import Tabella from './components/Tabella';
import Dettaglio from './components/Dettaglio';
import { Component } from 'react';

class App extends Component {
	state = {
		selected: undefined, // diventerà "Valore 1", "Valore 2", "Valore 3"
	};

	// L'unico modo per settare lo state di App è fare setState in App

	setStateOfApp = nuovaSelezione => {
		this.setState({
			selected: nuovaSelezione,
			// nuovaSelezione sarà "Valore 1", "Valore 2" o "Valore 3"
		});
	};

	render() {
		return (
			<div className="App">
				<header className="App-header">
					<Container>
						<Row>
							<Col>
								<Tabella
									selected={this.state.selected} // Tabella riceve IN LETTURA il valore corrente
									setStateOfApp={this.setStateOfApp} // Tabella riceve il modo per CAMBIARE il valore di selected
								/>
							</Col>
							<Col className="my-auto">
							{/* Dettaglio riceve IN LETTURA il valore dello stato */}
								<Dettaglio selected={this.state.selected} />
							</Col>
						</Row>
					</Container>
				</header>
			</div>
		);
	}
}

export default App;
