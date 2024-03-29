import { Container, Nav, Navbar } from "react-bootstrap"
import { Link, useLocation } from "react-router-dom"

const MyNavbar = () => {
    const location = useLocation();

    return (
        <Navbar className="bg-body-primary">
            <Container>
                <Nav className="ms-auto">
                    <Link to="/" className="nav-link text-dark">Class component</Link>
                </Nav>
                <Nav className="ms-auto">
                    <Link to="/functional" className="nav-link text-dark">Functional component</Link>
                </Nav>
                <Nav className="ms-auto">
                    <Link to="/prenotazioni" className="nav-link text-dark">Lista prenotazioni</Link>
                </Nav>
                <Nav className="ms-auto">
                    <Link to="/pippo" className="nav-link text-dark">Pagina di Pippo</Link>
                </Nav>
                <Nav className="ms-auto">
                    <Link to="/pluto" className="nav-link text-dark">Pagina di Pluto</Link>
                </Nav>
                <Nav className="ms-auto">
                    <Link to="/paperino" className="nav-link text-dark">Pagina di Paperino</Link>
                </Nav>
            </Container>
        </Navbar>
    )
}

export default MyNavbar;