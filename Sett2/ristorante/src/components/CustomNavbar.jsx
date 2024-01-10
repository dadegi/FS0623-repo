// Il componente Navbar sarà un functional component, in quanto deve fare solo il rendering della navbar; di conseguenza non è necessario l'import di React

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link, useLocation, useNavigate } from 'react-router-dom';

// Si potrebbero importare i component di Bootstrap anche così:
// import { Container, Navbar, Nav } from 'react-bootstrap'
// ma è meno efficiente

const CustomNavbar = props => {
	const location = useLocation();
	const navigate = useNavigate();

	return (
		<Navbar collapseOnSelect expand="lg" className="bg-body-tertiary">
			<Container fluid>
				<Link to="/" className="navbar-brand">
					Ristorante - {props.additionalText}
				</Link>
				<Navbar.Toggle aria-controls="responsive-navbar-nav" />
				<Navbar.Collapse id="responsive-navbar-nav">
					<Nav className="ms-auto">
						<Link to="/" className={location.pathname === '/' ? 'nav-link active' : 'nav-link'}>Home</Link>
                        <Link to="/menu" className={location.pathname === '/menu' ? 'nav-link active' : 'nav-link'}>Menu</Link>
                        <Link to="/prenotazione" className={location.pathname === '/prenotazione' ? 'nav-link active' : 'nav-link'}>Prenota</Link>
                        <Link to="/list" className={location.pathname === '/list' ? 'nav-link active' : 'nav-link'}>Lista prenotazioni</Link>
					</Nav>
				</Navbar.Collapse>
			</Container>
		</Navbar>
	);
};

export default CustomNavbar;
