import { Col, Container, Row, Badge } from "react-bootstrap";
import menu from '../data/menu.json';
import { Link } from "react-router-dom";

const Menu = () => {
    return (
        <Container>
            <Row className="justify-content-center">
                <Col md={6}>
                    {menu.map((piatto) => {
                        return (
                            <div key={piatto.id} className="my-3">
                            <Link to={`/detail/${piatto.id}`}>
                                <img src={piatto.image} alt={piatto.name} className="w-100" />
                            </Link>
                            <h5 className="text-center mt-1">
                                <span>{piatto.name}</span>
                                <Badge bg="warning" className="ms-2 mb-5">
                                    € {piatto.price}
                                </Badge>
                            </h5>
                        </div>
                        )
                    })}
                </Col>
            </Row>
        </Container>
    )
}

export default Menu;