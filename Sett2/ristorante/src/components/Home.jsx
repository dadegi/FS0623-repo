import menu from '../data/menu.json';
import Container from 'react-bootstrap/Container';
import Carousel from 'react-bootstrap/Carousel';
import { Row, Col, ListGroup, ListGroupItem } from 'react-bootstrap';
import { useState } from 'react';
import './Home.css';

const Home = () => {
	const [piattoSelezionato, setPiattoSelezionato] = useState(menu[0]);

	return (
		<Container>
			<Row className="justify-content-center">
				<Col md={6}>
					<Carousel
						className="mt-4"
						onSlid={(indiceArray) => {
							setPiattoSelezionato(menu[indiceArray])
						}}>
						{menu.map((piatto, i) => {
							return (
								<Carousel.Item key={i}>
									<img
										src={piatto.image}
										alt="Tipo di piatto"
										className="w-100"
									/>
									<Carousel.Caption>
										<h3>{piatto.name}</h3>
										<p>{piatto.description}</p>
									</Carousel.Caption>
								</Carousel.Item>
							);
						})}
					</Carousel>
				</Col>
			</Row>
			<Row className="justify-content-center">
				<Col md={6}>
					<ListGroup className="text-center">
						{piattoSelezionato.comments.map((commento, i) => {
							return (
								<ListGroupItem key={i}>
									{commento.author} | {commento.rating} -{' '}
									{commento.comment}
								</ListGroupItem>
							);
						})}
					</ListGroup>
				</Col>
			</Row>
		</Container>
	);
};

export default Home;
