import { Row, Col, Container, Form, Button, Alert } from 'react-bootstrap';
import { useState } from 'react';

/* Quali campi usiamo per la prenotazione?
1- name: string obbligatorio
2- phone: string obbligatorio
3- numberOfPeople: number valore predefinito: 1
4- smoking: boolean
5- data e ora: string obbligatorio
6- specialRequests: string
*/

const Prenotazione = () => {
	const [prenotazione, setPrenotazione] = useState({
		name: '',
		phone: '',
		numberOfPeople: 1,
		smoking: false,
		dateTime: '',
		specialRequests: '',
	});

	const [showAlert, setShowAlert] = useState(false);
	const [nuova, setNuova] = useState(false);

	const handleInputChange = (proprieta, valore) => {
		setPrenotazione({
			...prenotazione,
			[proprieta]: valore,
		});
	};

	const handleSubmit = async e => {
		e.preventDefault();
		console.log('Invio prenotazione');

		setNuova(true);
		// Fetch con metodo POST
		try {
			const res = await fetch(
				'https://striveschool-api.herokuapp.com/api/reservation',
				{
					method: 'POST',
					body: JSON.stringify(prenotazione),
					headers: {
						'Content-Type': 'application/json',
					},
				}
			);
			if (res.ok) {
				setPrenotazione({
					name: '',
					phone: '',
					numberOfPeople: 1,
					smoking: false,
					dateTime: '',
					specialRequests: '',
				});
				setShowAlert(true);
				setNuova(true);
			} else {
				throw new Error('Errore nel salvataggio della prenotazione');
			}
		} catch (error) {
			console.log('Errore:', error);
		}
	};

	return (
		<Container>
			<Row className="justify-content-center mt-3">
				<Col md={6}>
					<h2 className="text-center">Modulo di prenotazione</h2>
					{/* Con l'operatore SHORT CIRCUIT (&&) l'alert non viene inserito nel DOM finché showAlert è false */}
					{showAlert === true && (
						<Alert variant="info">Prenotazione salvata!</Alert>
					)}

					<Form onSubmit={handleSubmit}>
						<Form.Group className="mb-3">
							<Form.Label>Il tuo nome</Form.Label>
							<Form.Control
								type="text"
								placeholder="nome e cognome"
								required
								value={prenotazione.name}
								onChange={(e) => {
									setPrenotazione({
										...prenotazione,
										name: e.target.value
									})
								}}
							/>
						</Form.Group>
						<Form.Group className="mb-3">
							<Form.Label>Recapito telefonico</Form.Label>
							<Form.Control
								type="tel"
								placeholder="xxxxxxxxxx"
								required
								value={prenotazione.phone}
								onChange={(e) => {
									handleInputChange('phone', e.target.value)
								}}
							/>
						</Form.Group>
						<Form.Group className="mb-3">
							<Form.Label>Numero di coperti</Form.Label>
							<Form.Select
								aria-label="Quantità"
								required
								value={prenotazione.numberOfPeople}
								onChange={(e) => {
									handleInputChange('numberOfPeople', e.target.value)
								}}>
								<option>1</option>
								<option>2</option>
								<option>3</option>
								<option>4</option>
								<option>5</option>
								<option>6</option>
								<option>7</option>
								<option>8</option>
							</Form.Select>
						</Form.Group>
						<Form.Group className="mb-3">
							<Form.Check
								type="checkbox"
								label="Tavolo fumatori"
								checked={prenotazione.smoking}
								onChange={(e) => {
									handleInputChange('smoking', e.target.checked)
								}}
							/>
						</Form.Group>
						<Form.Group className="mb-3">
							<Form.Label>Data prenotazione</Form.Label>
							<Form.Control
								type="datetime-local"
								required
								value={prenotazione.dateTime}
								onChange={(e) => {
									handleInputChange(
										'dateTime',
										e.target.value
									);
								}}
							/>
						</Form.Group>
						<Form.Group className="mb-3">
							<Form.Label>
								Note particolari &#40;allergie,
								intolleranze...&#41;
							</Form.Label>
							<Form.Control
								as="textarea"
								rows={3}
								placeholder="allergie, intolleranze..."
								value={prenotazione.specialRequests}
								onChange={(e) => {
									handleInputChange(
										'specialRequests',
										e.target.value
									);
								}}
							/>
						</Form.Group>
						<Button variant="primary" type="submit">
							Prenota!
						</Button>
					</Form>
				</Col>
			</Row>
		</Container>
	);
};

export default Prenotazione;
