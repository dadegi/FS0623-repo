import { Card } from 'react-bootstrap';

const Book = ({ book, changeBook, bookSelected }) => {
	return (
		<Card
			className={
				bookSelected?.id === book.id ? 'custom-border mt-3' : 'mt-3'
			}
			onClick={() => changeBook(book)}
			style={{ cursor: 'pointer' }}>
			<Card.Img
				src={book.imageUrl}
				alt="Copertina"
				className="book-image img-fluid"
			/>

			<Card.Body className="d-flex flex-column">
				<div>
					<Card.Text className="fw-bold">{book.title}</Card.Text>
					<p>{book.price}</p>
				</div>
			</Card.Body>
		</Card>
	);
};

export default Book;
