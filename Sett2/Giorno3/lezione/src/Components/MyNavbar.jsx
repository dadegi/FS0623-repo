import { Container } from 'react-bootstrap';
import { Nav } from 'react-bootstrap';
import { Navbar } from 'react-bootstrap';
import { Link, useLocation } from 'react-router-dom';

const MyNavbar = () => {
    const location = useLocation();
    console.log('Location: ', location);
	return (
		<Navbar className="bg-body-primary">
			<Container>
				<Nav className="ms-auto">
					<Link to="/" className="nav-link text-light">
						Home
					</Link>
					<Link to="/about" className="nav-link text-light">
						About
					</Link>
				</Nav>
			</Container>
		</Navbar>
	);
};

export default MyNavbar;
