import { Component } from 'react';
import { Card, Spinner, Alert } from 'react-bootstrap';

class MovieCard extends Component {
	state = {
		dettagliFilm: {}, // dopo componentDidMount diventerà un oggetto con alcuni dettagli del film; al montaggio, quindi al primo render, i dettagli ancora non ci sono: di conseguenza si istanzia un oggetto vuoto che successivamente verrà riempito, all'aggiornamento dello state di App che lo passerà come props
		isLoading: true,
		isError: false,
		inizio: true,
	};

	componentDidMount() {
		console.log('componentDidMount attivato!');
		this.recuperaFilm(); // Chiamata alla fetch di recupero del film al montaggio del component
	}

	// questo component recupera le informazioni sui film da omdbapi.com; il metodo per eseguire la fetch al montaggio del component è componentDidMount, che viene eseguito UNA SOLA VOLTA, finito il primo render(). Al termine della fetch useremo il recuperaFilm anche per settare lo stato con la proprietà dettagliFilm

	componentDidUpdate(prevProps, prevState) {
		console.log('componentDidUpdate attivato!');
		// componentDidUpdate viene AUTOMATICAMENTE invocato da React ogni volta che c'è un cambio di props e/o di state (con setState); saremmo portati quindi a scrivere qui
		// this.recuperaFilm();
		// ma genereremmo un loop, perché al primo cambio di props/state verrebbe invocato componentDidUpdate che rifarebbe la fetch che reinvocherebbe componentDidUpdate che rifarebbe la fetch e così via all'infinito.
		// Dal momento che componentDidUpdate ha due parametri che gli consentono di tenere traccia di props e state precedenti (mentre render non ha parametri), volendo lanciare recuperaFilm() SOLO quando cambia la props e non quando cambia lo state, chiamiamo la recuperaFilm SOLO se cambia il titolo del film

		if (prevProps.titoloFilm !== this.props.titoloFilm) {
			// richiama la recuperaFilm() SOLO se è cambiato il titolo del film
			this.recuperaFilm();
		}
	}

	// recuperaFilm = () => {
	// console.log('Metodo recuperaFilm() attivato!');
	// this.setState({
	// 	isLoading: true,
	// });

	// if (this.props.titoloFilm == '') {
	// 	this.setState({
	// 		isLoading: false,
	//         inizio: true,
	// 	});
	// 	return;
	// }

	// this.setState({
	//     inizio: false,
	// });

	// 	fetch(
	// 		'http://www.omdbapi.com/?apikey=24ad60e9&s=' + this.props.titoloFilm
	// 	)
	// 		.then(res => {
	// 			if (res.ok) {
	// 				return res.json();
	// 			} else {
	// 				throw new Error('Errore nel recupero dei dati!');
	// 			}
	// 		})
	// 		.then(data => {
	// 			console.log('Risultato della fetch: ', data);
	// 			console.log('Dettagli film: ', data.Search[0]);
	// 			setTimeout(() => {
	// 				this.setState({
	// 					dettagliFilm: data.Search[0],
	// 					isLoading: false,
	// 				});
	// 			}, 1000); // escamotage per evitare che con connessioni troppo veloci lo spinner non compaia e lo schermo sfarfalli

	// 			// a questo punto, una volta arrivati i dati e quindi aggiornato lo state, render() viene invocato di nuovo, la vista si aggiorna e mostra i risultati della fetch
	// 		})
	// 		.catch(err => {
	// 			console.log('Errore! ', err);
	// 			this.setState({
	// 				isLoading: false,
	// 				isError: true,
	// 			});
	// 		});
	// };

	async recuperaFilm() {
		console.log('Metodo recuperaFilm() attivato!');
		this.setState({
			isLoading: true,
		});

		if (this.props.titoloFilm == '') {
			this.setState({
				isLoading: false,
				inizio: true,
			});
			return;
		}

		this.setState({
			inizio: false,
		});

		try {
			const res = await fetch(
				'http://www.omdbapi.com/?apikey=24ad60e9&s=' +
					this.props.titoloFilm
			);
			if (res.ok) {
				console.log(res);
				const data = await res.json();
				console.log('Dettagli film: ', data.Search[0]);
				this.setState({
					dettagliFilm: data.Search[0],
					isLoading: false,
				});
			} else {
				throw new Error('Errore nel recupero dei dati!');
			}
		} catch (error) {
			console.log('Errore! ', error);
		}
	}

	render() {
		console.log('Metodo render() attivato!');
		// this.recuperaFilm();
		// Dal momento che recuperaFilm fa il setState, anche in questo caso avremmo un loop infinito, perché anche render viene invocato da React ogni volta che cambiano props/state
		return (
			<>
				<h2>Locandina</h2>
				{this.state.isLoading && (
					// primo render
					<div className="text-center">
						<Spinner animation="border" variant="danger" />
					</div>
				)}
				{this.state.isError && (
					<Alert variant="danger">Errore nel recupero film</Alert>
				)}
				{this.state.inizio && (
					<Alert variant="danger">Nessun film selezionato</Alert>
				)}
				{!this.state.isLoading &&
					!this.state.isError &&
					!this.state.inizio && (
						// secondo render
						<Card>
							<Card.Img
								variant="top"
								src={this.state.dettagliFilm.Poster}
							/>
							<Card.Body>
								<Card.Title>
									{this.state.dettagliFilm.Title}
								</Card.Title>
								<Card.Text>
									Id film: {this.state.dettagliFilm.imdbID} |
									Anno film: {this.state.dettagliFilm.Year}
								</Card.Text>
							</Card.Body>
						</Card>
					)}
			</>
		);
	}
}

export default MovieCard;
