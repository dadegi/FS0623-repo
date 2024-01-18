import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'react-bootstrap';
import Main from './components/Main';
import AggiungiDisco from './components/AggiungiDisco';
import MyNavbar from './components/MyNavbar';
import Register from './components/Register';
import Login from './components/Login';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
	return (
		<BrowserRouter>
			<div className="App">
				<header className="App-header">
					<MyNavbar />
				</header>
				<Container>
					<Routes>
						<Route path='/' element={<Main />} />
						<Route path='/aggiungi' element={<AggiungiDisco />} />
						<Route path='/registrati' element={<Register />} />
						<Route path='/login' element={<Login />} />
					</Routes>
				</Container>
			</div>
		</BrowserRouter>
	);
}

export default App;
