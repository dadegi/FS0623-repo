import { useState, useEffect } from 'react';
import { Container, Row, Col, ListGroup } from 'react-bootstrap';
import Reservation from '../models/reservation';
import SingleReservation from './SingleReservation';

const FetchComponent = () => {
	const [reservations, setReservations] = useState<Reservation[]>([]);

	useEffect(() => {
		getReservations();
	}, []);

	const getReservations = () => {
		fetch('https://striveschool-api.herokuapp.com/api/reservation')
			.then(response => {
				if (response.ok) {
					return response.json();
				} else {
					throw new Error('Errore nel recupero dei dati');
				}
			})
			.then(data => {
				setReservations(data);
			})
			.catch(err => {
				console.log('Errore: ', err);
			});
	};

    return (
        <Container>
            <Row className="justify-content-center">
                <Col md={6}>
                    <h2>Lista prenotazioni</h2>
                    <ListGroup>
                        {reservations.map((pren) => {
                            return <SingleReservation reservation={pren} key={pren._id} />
                        })}
                    </ListGroup>
                </Col>
            </Row>
        </Container>
    )
};

export default FetchComponent;