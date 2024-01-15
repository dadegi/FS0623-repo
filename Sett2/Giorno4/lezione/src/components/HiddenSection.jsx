import { useState } from 'react';
import { Button, Card } from 'react-bootstrap';

const HiddenSection = () => {
	const [mostra, setMostra] = useState(false);

	return (
		<div>
			<Button variant="warning" onClick={() => setMostra(!mostra)}>
				{mostra ? 'Mostra' : 'Nascondi'} contenuto
			</Button>
			{mostra && (
				<Card className="mt-2">
					<Card.Img
						variant="top"
						src="https://cdn.pixabay.com/photo/2014/10/11/09/09/erlenmeyer-484349_1280.png"
					/>
					<Card.Body>
						<Card.Title>Ampollina</Card.Title>
						<Card.Text>
							Lorem ipsum dolor sit, amet consectetur adipisicing
							elit. Quae eum impedit unde id, alias consequatur
							voluptates vitae modi sit amet. Eum sequi porro
							pariatur commodi voluptates placeat cupiditate
							quidem dolor.
						</Card.Text>
					</Card.Body>
				</Card>
			)}
		</div>
	);
};

export default HiddenSection;
