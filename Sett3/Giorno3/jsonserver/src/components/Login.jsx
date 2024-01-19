import { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import axios from 'axios';
import miaVariabile from '../variables/variables';

const Login = () => {
	const navigate = useNavigate();

	const [data, setData] = useState({
		email: '',
		password: '',
	});

	useEffect(() => {
		const user = JSON.parse(localStorage.getItem('utente'));
		if (user) {
			alert('sei gia loggato');
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
		const loginData = {
			email: data.email,
			password: data.password,
		};
		axios
			.post(miaVariabile.apiUrl + 'login', loginData)
			.then(response => {
				console.log(response);
				alert('Login effettutato');
				const utente = response.data;
				console.log(utente);
				localStorage.setItem('utente', JSON.stringify(utente));
				navigate('/');
			})
			.catch(error => {
				alert('Login errato', error);
			});
	};

	return (
		<>
			{!localStorage.getItem('utente') && (
				<div>
					<h1>Login</h1>
					<form onSubmit={handleSubmit}>
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
						<button type="submit" className="btn btn-primary me-3">Login</button>
						<span>oppure</span>
						<Link to="/registrati" className="btn btn-success ms-3">Registrati</Link>
					</form>
				</div>
			)}
		</>
	);
};

export default Login;
