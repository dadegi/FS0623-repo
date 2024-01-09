// import { Component } from 'react';
import { ListGroup } from 'react-bootstrap';

// class Tabella extends Component {
	const Tabella = (props) => { // Nei functional components, non esistendo il constructor/super(props) implicito, si devono dichiarare le props in ingresso come parametri della funzione o chiamare direttamente props come parametro per poi utilizzare come metodi di props i parametri passati dal componente parent
		
	// state = {
	//     selected: undefined // assumerà il valore da una props in ingresso
	// }

	// Tabella riceve l'informazione di selected dalle props, perché gli sarà passata dal component padre, App.js

	// checkSelected = value => (value === this.props.selected ? 'selected' : ''); // con la keyword this nel class component
	const checkSelected = value => (value === props.selected ? 'selected' : ''); // senza la keyword this nel functional component

	// render() {
		return (
			<>
				<h2>Componente Tabella</h2>
				<ListGroup className="text-dark">
					<ListGroup.Item
						// onClick={() => this.setState({selected: 'Valore 1'})}
						// onClick={() => this.props.setStateOfApp('Valore 1')}
						// className={this.checkSelected('Valore 1')}>
						onClick={() => props.setStateOfApp('Valore 1')}
						className={checkSelected('Valore 1')}>
						Valore 1
					</ListGroup.Item>
					<ListGroup.Item
						// onClick={() => this.setState({selected: 'Valore 2'})}
						// onClick={() => this.props.setStateOfApp('Valore 2')}
						// className={this.checkSelected('Valore 2')}>
						onClick={() => props.setStateOfApp('Valore 2')}
						className={checkSelected('Valore 2')}>
						Valore 2
					</ListGroup.Item>
					<ListGroup.Item
						// onClick={() => this.setState({selected: 'Valore 3'})}
						// onClick={() => this.props.setStateOfApp('Valore 3')}
						// className={this.checkSelected('Valore 3')}>
						onClick={() => props.setStateOfApp('Valore 3')}
						className={checkSelected('Valore 3')}>
						Valore 3
					</ListGroup.Item>
				</ListGroup>
				<p className="mt-3">
					{/* Stato del componente: {this.props.selected || 'undefined'} */}
					Stato del componente: {props.selected || 'undefined'}
				</p>
			</>
		);
	// }
}

export default Tabella;
