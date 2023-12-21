import './App.css';
import React from 'react';
import axios from 'axios';
import UsersTable from './UsersTable';

class App extends React.Component {
	constructor(props) {
		super(props);
		console.log('constructor');
		this.state = {users:[]}
	}

	componentDidMount() {
		console.log('componentDidMount');
		axios.get('https://jsonplaceholder.typicode.com/users').then((res) => {
			const utenti = res.data;
			this.setState({users: utenti});
		})
	}

	render() {
		console.log('render');
		return (
			<div className="App">
				<header className="App-header">
					<h1>React: CRUD e componentDidMount</h1>
				</header>
				<UsersTable users = {this.state.users} />
			</div>
		);
	}
}

export default App;
