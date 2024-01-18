import { ListGroup } from 'react-bootstrap';
import Reservation from '../models/reservation';

const SingleReservation = ({ reservation }: { reservation: Reservation }) => {
	return (
		<ListGroup.Item>
			{reservation.name} | {reservation.phone} | Numero di persone:{' '}
			{reservation.numberOfPeople}
		</ListGroup.Item>
	);
};

export default SingleReservation;
