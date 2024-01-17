import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Register = () => {
	const navigate = useNavigate();

	const [data, setData] = useState({
		email: '',
		password: '',
		nome: '',
		cognome: '',
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
		const userData = {
			email: data.email,
			password: data.password,
			nome: data.nome,
			cognome: data.cognome,
		};
		axios
			.post('http://localhost:3002/register', userData)
			.then(response => {
				console.log(response.status);
			})
			.catch(error => {
				console.log(error);
			});
		navigate('/');
	};

	return (
        <div>
            <h1>Registrati</h1>
            <form onSubmit={handleSubmit}>
                <label htmlFor="nome">
                    Nome &nbsp;
                    <input type="text" name="nome" value={data.nome} onChange={handleChange} />
                </label>
                <p>&nbsp;</p>
                <label htmlFor="cognome">
                    Cognome &nbsp;
                    <input type="text" name="cognome" value={data.cognome} onChange={handleChange} />
                </label>
                <p>&nbsp;</p>
                <label htmlFor="email">
                    Email &nbsp;
                    <input type="email" name="email" value={data.email} onChange={handleChange} />
                </label>
                <p>&nbsp;</p>
                <label htmlFor="password">
                    Password &nbsp;
                    <input type="password" name="password" value={data.password} onChange={handleChange} />
                </label>
                <p>&nbsp;</p>
                <button type="submit">Registrati</button>
            </form>
        </div>
    );
};

export default Register;
