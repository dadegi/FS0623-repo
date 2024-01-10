import React from 'react';
import {
	Container,
	Row,
	Col,
	ListGroup,
	Spinner,
	Button,
	Alert,
} from 'react-bootstrap';
import { parseISO, format } from 'date-fns';
import { it } from 'date-fns/locale';

class ListaPrenotazioni extends React.Component {
	constructor(props) {
		super(props);
        console.log('Constructor');
		// Inseriamo nello state tutto quello che, quando si aggiorna, deve far avvenire qualcosa, quindi l'array delle prenotazioni, un booleano per il loader e un booleano per gestire messaggi di errore (queste ultime due cose rappresentano migliorie dell'esperienza utente - UX)
		this.state = {
			prenotazioni: [],
			isLoading: true,
			isError: false,
		};
	}

	getPrenotazioni = () => {
		fetch('https://striveschool-api.herokuapp.com/api/reservation')
			.then(response => {
				if (response.ok) {
					return response.json();
				} else {
					throw new Error('Errore nel recupero prenotazioni!');
				}
			})
			.then(data => {
				console.log('Prenotazioni:', data);
				// OGNI VOLTA che viene settato lo state, il metodo render() viene AUTOMATICAMENTE richiamato
				this.setState({
					prenotazioni: data,
					isLoading: false,
				});
			})
			.catch(error => {
				console.log('ERRORE!', error);
				this.setState({
					isLoading: false,
					isError: true,
				});
			});
		// È sbagliato chiamare setState all'interno del metodo render(), perché OGNI setState invoca render(), quindi genererebbe un loop infinito
	};

	// componentDidMount viene chiamato UNA SOLA VOLTA dopo il primo render, per cui siamo sicuri che non verrà più rieseguito per tutto il ciclo di vita del component

	componentDidMount() {
		this.getPrenotazioni();
	}

	render() {
		return (
			<>
				<Container>
					<Row className="justify-content-center mt-3">
						<Col
							md={8}
							className={`col col-md-8 ${
								this.state.isLoading ? 'mb-2' : 'mb-3'
							}`}>
							<h2 className="text-center my-3">
								Prenotazioni registrate
							</h2>
							{this.state.isLoading && (
								<div className="text-center mb-2">
									<Spinner
										animation="border"
										variant="info"
									/>
								</div>
							)}
							{this.state.isError && (
								<Alert variant="danger" className="text-center">
									Errore nel recupero delle prenotazioni
								</Alert>
							)}
							<ListGroup>
								{this.state.prenotazioni.map(prenotazione => {
									return (
										<ListGroup.Item
											key={prenotazione._id}
											className="d-flex justify-content-between">
											<div className="d-flex align-items-center">
												{prenotazione.name} per{' '}
												{prenotazione.numberOfPeople}{' '}
												persone, il{' '}
												{/*
                                                Passaggi per convertire la data in un formato locale con date-fns:
                                                1) convertire la data in un oggetto Date -- parseISO
                                                2) convertire l'oggetto Date ottenuto in una stringa del formato desiderato -- format()
                                                */}
												{format(
													parseISO(
														prenotazione.dateTime
													),
													'd MMM yyyy',
													{ locale: it }
												)}
											</div>
											<Button
												variant="light"
												onClick={() => {
													fetch(
														'https://striveschool-api.herokuapp.com/api/reservation/' +
															prenotazione._id,
														{
															method: 'DELETE',
														}
													)
														.then(res => {
															if (res.ok) {
																console.log(
																	'Prenotazione annullata'
																);
																this.getPrenotazioni();
															} else {
																throw new Error(
																	'Annullamento della prenotazione non riuscito; ti tocca pagare! '
																);
															}
														})
														.catch(err => {
															console.log(
																'Errore:',
																err
															);
														});
												}}>
												❌
											</Button>
										</ListGroup.Item>
									);
								})}
							</ListGroup>
						</Col>
					</Row>
				</Container>
			</>
		);
	}
}

export default ListaPrenotazioni;
