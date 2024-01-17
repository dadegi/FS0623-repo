import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";

const MyNavbar = () => {
    return (
        <Navbar className="bg-body-primary">
            <Container>
                <Nav className="ms-auto">
                    <Link to="/" className="nav-link text-light">
                        Lista
                    </Link>
                    <Link to="/aggiungi" className="nav-link text-light">
                        Aggiungi
                    </Link>
                    <Link to="/registrati" className="nav-link text-light">
                        Registrati
                    </Link>
                </Nav>
            </Container>
        </Navbar>
    );
}

export default MyNavbar;