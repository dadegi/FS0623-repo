import React from 'react';

class StateClass extends React.Component {
	constructor(props) {
		super(props);
		this.state = { conta: 0 };
		this.incrementa = this.incrementa.bind(this);
	}

	incrementa() {
		let aumenta = this.state.conta + 1;
		this.setState({ conta: aumenta });
	}

	render() {
		return (
			<div>
				<h4>Hai cliccato {this.state.conta} volte</h4>
				<button onClick={this.incrementa}>Clicca</button>
			</div>
		);
	}
}

export default StateClass;
