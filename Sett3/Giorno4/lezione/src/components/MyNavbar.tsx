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
            </Container>
        </Navbar>
    )
}

export default MyNavbar;