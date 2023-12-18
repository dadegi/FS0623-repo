import { Component } from 'react';
import Button from './Button';

class BenvenutoClass extends Component {
	render() {
		return (
			// React fragment, quando non voglio che il return sia contenuto in un div
			// <>
			// 	<h3>Ciao {this.props.name}</h3>
			// 	<hr />
			// 	<Button pippo="button" />
			// </>
			// Quando voglio che sia contenuto in un div uso questa sintassi:
			<div>
				<h3>Ciao {this.props.name}</h3>
				<hr />
				<Button pippo="button" />
			</div>
		);
	}
}

export default BenvenutoClass;
