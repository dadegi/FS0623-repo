import { useEffect, useState } from 'react';

// useEffect simula i cicli di vita principali dei class component: componentDidMount, componentDidUpdate, componentWillUnmount

const UseEffect = () => {
	const [counter, setCounter] = useState(0);
	const [nome, setNome] = useState('Pippo');
    const [nome2, setNome2] = useState('');

	// Questo useEffect viene lanciato OGNI VOLTA che nel componente cambia qualcosa
    useEffect(() => {
		console.log(
			'useEffect senza parametri, lanciato al montaggio e a ogni update'
		);
	});

    // Questo useEffect viene lanciato quando cambia il valore di counter
	useEffect(() => {
		console.warn(
			'useEffect usato come componentDidUpdate: viene lanciato soltanto al cambiamento del valore di counter'
		);
	}, [counter]);

	// Questo useEffect viene lanciato solo al montaggio del componente
    useEffect(() => {
		console.error('useEffect utilizzato come componentDidMount');
	}, []);

	return (
		<div>
			<h1>useEffect</h1>
			<p>Il valore corrente di counter è: {counter}</p>
			<button onClick={() => setCounter(counter + 1)}>Incrementa</button>
			<h3>{nome}</h3>
			<button
				onClick={() =>
					setNome(nome === 'Pippo' ? 'Paperino' : 'Pippo')
				}>
				Cambia nome
			</button>
            <br /><br />
            <input type="text" onChange={(e) => setNome2(e.target.value)} />
            <h3>Nome modificato: {nome2}</h3>
		</div>
	);
};

export default UseEffect;
