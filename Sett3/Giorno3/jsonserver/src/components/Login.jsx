import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import miaVariabile from '../variables/variables';

const Login = () => {
	const navigate = useNavigate();
	const [data, setData] = useState({
		email: '',
		password: '',
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
					Email &nbsp;
					<input
						type="password"
						name="password"
						value={data.password}
						onChange={handleChange}
					/>
				</label>
				<p>&nbsp;</p>
                <button type="submit">Login</button>
			</form>
		</div>
	);
};

export default Login;
