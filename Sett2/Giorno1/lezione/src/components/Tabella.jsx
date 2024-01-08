import { Component } from 'react';
import { ListGroup } from 'react-bootstrap';

class Tabella extends Component {
	// state = {
	//     selected: undefined // assumerà il valore da una props in ingresso
	// }

	// Tabella riceve l'informazione di selected dalle props, perché gli sarà passata dal component padre, App.js

	checkSelected = value => (value === this.props.selected ? 'selected' : '');

	render() {
		return (
			<>
				<h2>Componente Tabella</h2>
				<ListGroup className="text-dark">
					<ListGroup.Item
						// onClick={() => this.setState({selected: 'Valore 1'})}
						onClick={() => this.props.setStateOfApp('Valore 1')}
						className={this.checkSelected('Valore 1')}>
						Valore 1
					</ListGroup.Item>
					<ListGroup.Item
						// onClick={() => this.setState({selected: 'Valore 2'})}
						onClick={() => this.props.setStateOfApp('Valore 2')}
						className={this.checkSelected('Valore 2')}>
						Valore 2
					</ListGroup.Item>
					<ListGroup.Item
						// onClick={() => this.setState({selected: 'Valore 3'})}
						onClick={() => this.props.setStateOfApp('Valore 3')}
						className={this.checkSelected('Valore 3')}>
						Valore 3
					</ListGroup.Item>
				</ListGroup>
				<p className="mt-3">
					Stato del componente: {this.props.selected || 'undefined'}
				</p>
			</>
		);
	}
}

export default Tabella;
