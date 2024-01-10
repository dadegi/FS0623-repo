import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";

const Interno = () => {
    return (
        <Container>
            <h1>Sono richiamato da about</h1>
            <Link to="/about">Torna indietro</Link>
        </Container>
        
    )
}

export default Interno;