import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import miaVariabile from '../variables/variables';

const Register = () => {
	const navigate = useNavigate();

	const [data, setData] = useState({
		email: '',
		password: '',
		nome: '',
		cognome: '',
	});

	useEffect(() => {
		const user = JSON.parse(localStorage.getItem('utente'));
		if (user) {
			alert('Non puoi registrare altri utenti');
			return navigate('/');
		}
	}, []);

	const handleChange = e => {
		const value = e.target.value;
		setData({
			...data,
			[e.target.name]: value,
		});
	};

	const handleSubmit = e => {
		e.preventDefault();
		const userData = {
			email: data.email,
			password: data.password,
			nome: data.nome,
			cognome: data.cognome,
		};
		axios
			.post(miaVariabile.apiUrl + 'register', userData)
			.then(response => {
				console.log(response.status);
			})
			.catch(error => {
				console.log(error);
			});
		navigate('/');
	};

	return (
		<>
			{!localStorage.getItem('utente') && (
				<div>
					<h1>Registrati</h1>
					<form onSubmit={handleSubmit}>
						<label htmlFor="nome">
							Nome &nbsp;
							<input
								type="text"
								name="nome"
								value={data.nome}
								onChange={handleChange}
							/>
						</label>
						<p>&nbsp;</p>
						<label htmlFor="cognome">
							Cognome &nbsp;
							<input
								type="text"
								name="cognome"
								value={data.cognome}
								onChange={handleChange}
							/>
						</label>
						<p>&nbsp;</p>
						<label htmlFor="email">
							Email &nbsp;
							<input
								type="email"
								name="email"
								value={data.email}
								onChange={handleChange}
							/>
						</label>
						<p>&nbsp;</p>
						<label htmlFor="password">
							Password &nbsp;
							<input
								type="password"
								name="password"
								value={data.password}
								onChange={handleChange}
							/>
						</label>
						<p>&nbsp;</p>
						<button type="submit">Registrati</button>
					</form>
				</div>
			)}
		</>
	);
};

export default Register;
