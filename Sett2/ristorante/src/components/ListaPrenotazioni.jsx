import { useState, useEffect } from 'react';
import {
	Container,
	Row,
	Col,
	ListGroup,
	Spinner,
	Button,
	Alert,
} from 'react-bootstrap';
import { Trash3Fill } from 'react-bootstrap-icons';
import { parseISO, format } from 'date-fns';
import { it } from 'date-fns/locale';

const ListaPrenotazioni = () => {
	const [prenotazioni, setPrenotazioni] = useState([]);
	const [isLoading, setIsLoading] = useState(true);
	const [isError, setIsError] = useState(false);

	const getPrenotazioni = () => {
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
				setPrenotazioni(data);
				setIsLoading(false);
			})
			.catch(error => {
				console.log('ERRORE!', error);
				setIsLoading(false);
				setIsError(true);
			});
	};

	useEffect(() => {
		getPrenotazioni();
	}, []);

	return (
		<>
			<Container>
				<Row className="justify-content-center mt-3">
					<Col
						md={8}
						className={`col col-md-8 ${
							isLoading ? 'mb-2' : 'mb-3'
						}`}>
						<h2 className="text-center my-3">
							Prenotazioni registrate
						</h2>
						{isLoading && (
							<div className="text-center mb-2">
								<Spinner animation="border" variant="info" />
							</div>
						)}
						{isError && (
							<Alert variant="danger" className="text-center">
								Errore nel recupero delle prenotazioni
							</Alert>
						)}
						<ListGroup>
							{prenotazioni.map(prenotazione => {
								return (
									<ListGroup.Item
										key={prenotazione._id}
										className="d-flex justify-content-between">
										<div className="d-flex align-items-center">
											{prenotazione.name} per{' '}
											{prenotazione.numberOfPeople}{' '}
											persone, il{' '}
											{format(
												parseISO(prenotazione.dateTime),
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
															getPrenotazioni();
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
											<Trash3Fill />
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
};

export default ListaPrenotazioni;
