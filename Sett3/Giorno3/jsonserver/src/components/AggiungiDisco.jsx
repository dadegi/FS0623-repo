import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const AggiungiDisco = () => {
	const navigate = useNavigate();

	const [data, setData] = useState({
		titolo: '',
		autore: '',
		anno: '',
	});

	const handleChange = e => {
		const value = e.target.value;
		setData({
			...data,
			[e.target.name]: value,
		});
	};

	const handleSubmit = e => {
		e.preventDefault();
		const dataDisco = {
			titolo: data.titolo,
			autore: data.autore,
			anno: data.anno,
		};
		axios
			.post('http://localhost:3002/dbprova', dataDisco)
			.then(response => {
				console.log(response.status);
			}).catch(error => {
                console.log(error);
            });
		navigate('/');
	};

	return (
		<div>
			<h1>Aggiungi un disco</h1>
			<form onSubmit={handleSubmit}>
				<label htmlFor="titolo">
					Titolo &nbsp;
					<input
						type="text"
						name="titolo"
						value={data.titolo}
						onChange={handleChange}
					/>
				</label>
				<p>&nbsp;</p>
				<label htmlFor="autore">
					Autore &nbsp;
					<input
						type="text"
						name="autore"
						value={data.autore}
						onChange={handleChange}
					/>
				</label>
				<p>&nbsp;</p>
				<label htmlFor="anno">
					Anno di pubblicazione &nbsp;
					<input
						type="number"
						name="anno"
						value={data.anno}
						onChange={handleChange}
					/>
				</label>
				<p>&nbsp;</p>
				<button type="submit">Aggiungi</button>
			</form>
		</div>
	);
};

export default AggiungiDisco;
