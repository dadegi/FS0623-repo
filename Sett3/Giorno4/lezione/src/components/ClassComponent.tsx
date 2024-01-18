import { Component } from 'react';

interface ClassComponentProps {
	textContent: string;
	h2Color?: string; // prop opzionale, nel caso non venga comunicata l'invocazione del component rimane valida
}

interface ClassComponentState {
	counter: number | null;
	firstName: string;
}

class ClassComponent extends Component<
	ClassComponentProps,
	ClassComponentState
> {
	state = {
		counter: null,
		firstName: 'Pippo',
	};

	render() {
		return (
			<div>
				<h2 style={{ color: this.props.h2Color || 'blue' }}>
					Class component in Typescript
				</h2>
				<p>{this.props.textContent}</p>
				<h4>
					Clicca il paragrafo sottostante per cambiare il valore di
					counter
				</h4>
				<p onClick={() => this.setState({ counter: 100 })}>
					Il valore di counter è: {this.state.counter}
				</p>
				<p>
					Questo component è stato scritto da {this.state.firstName}
				</p>
			</div>
		);
	}
}

export default ClassComponent;
