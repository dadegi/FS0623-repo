import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';

const MyNavbar = () => {

    const navigate = useNavigate();

	const logout = () => {
		localStorage.removeItem('utente');
        navigate('/login');
	};

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
					{!localStorage.getItem('utente') && (
						<>
							<Link to="/login" className="nav-link text-light">
								Login
							</Link>
							<Link
								to="/registrati"
								className="nav-link text-light">
								Registrati
							</Link>
						</>
					)}
				</Nav>
			</Container>
			{localStorage.getItem('utente') && (
				<button
					type="button"
					className="btn btn-danger"
					onClick={logout}>
					LOGOUT
				</button>
			)}
		</Navbar>
	);
};

export default MyNavbar;
