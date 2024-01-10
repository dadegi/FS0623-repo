import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const About = () => {
    const navigate = useNavigate();
    return (
<Container>
        <h1>Sono il componente About</h1>
        <Link to="/about/interno">Vai al componente interno</Link>
        <button className="btn btn-primary" onClick={() => navigate('/personal')}>LOGIN</button>
    </Container>
    )
    
}

export default About;