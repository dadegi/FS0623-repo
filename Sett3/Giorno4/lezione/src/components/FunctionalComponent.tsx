import { useState } from 'react';

interface FunctionalComponentProps {
	textContent: string;
	h2Color?: string;
}

const FunctionalComponent = (props: FunctionalComponentProps) => {
	const [firstName, setFirstName] = useState('Pippo');
	const [counter, setCounter] = useState<number | null>(null);

	return (
		<div>
			<h2 style={{ color: props.h2Color || 'blue' }}>
				Functional component in Typescript
			</h2>
			<p>{props.textContent}</p>
			<h4>
				Clicca il paragrafo sottostante per cambiare il valore di
				counter
			</h4>
			<p onClick={() => setCounter(100)}>
				Il valore di counter è: {counter}
			</p>
			<p>Questo component è stato scritto da {firstName}</p>
		</div>
	);
};

export default FunctionalComponent;
