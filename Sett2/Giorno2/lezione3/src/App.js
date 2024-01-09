import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col, Form } from 'react-bootstrap';
// import { Component } from 'react';
import MovieCard from './components/MovieCard';
import { useState } from 'react';

// class App extends Component {
	const App = () => {
	// state = {
	// 	titoloFilm: '',
	// };

	const [titoloFilm, setTitoloFilm] = useState('');

	//render() {
		return (
			<div className="App">
				<header className="App-header">
					<Container> 
						<Row className="justify-content-center">
							<Col>
							<h2>Scegli un titolo</h2>
								<Form.Select
									value={titoloFilm}
									onChange={e =>
										// this.setState({
										// 	titoloFilm: e.target.value,
										// })
										setTitoloFilm(e.target.value)
									}>
									<option></option>
									<option value={'Iron man'}>Iron man</option>
									<option value={'Groot'}>Groot</option>
									<option value={'Thor'}>Thor</option>
									<option value={'Hulk'}>Hulk</option>
									<option value={'Deadpool'}>Deadpool</option>
									<option value={'Superman'}>Superman</option>
								</Form.Select>
							</Col>
						</Row>
						<hr />
						<Row className="justify-content-center mt-3">
							<Col>
								<MovieCard titoloFilm={titoloFilm} />
							</Col>
						</Row>
					</Container>
				</header>
			</div>
		);
	// }
}

export default App;
