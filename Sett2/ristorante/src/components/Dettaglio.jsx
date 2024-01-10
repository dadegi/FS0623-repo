import { Container, Row, Col, Badge, Spinner } from "react-bootstrap";
import menu from '../data/menu.json';
import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

const Dettaglio = () => {
    const params = useParams();
    const navigate = useNavigate();

    const [dettagliPiatto, setDettagliPiatto] = useState(null);

    useEffect(() => {
        const indice = parseInt(params.elementId);
        if (!isNaN(indice) && indice >= 0 && indice < menu.length) {
            const mostra = menu[indice];
            setTimeout(() => {
                setDettagliPiatto(mostra)
            }, 1000)
        } else {
            navigate('not-found');
        }
    }, []);

    return (
        <Container className="h-100">
            <Row className="justify-content-center h-100">
                <Col md={6} className="h-100">
                    {dettagliPiatto === null && (
                        <div className="text-center h-100 d-flex justify-content-center align-items-center">
                            <Spinner animation="border" variant="success" />
                        </div>
                    )}
                    {dettagliPiatto && (
                        <div key={dettagliPiatto.id} className="my-3">
                            <img src={dettagliPiatto.image} alt={dettagliPiatto.name} className="w-100" />
                            <h5 className="text-center mt-1">
                                <span>{dettagliPiatto.name}</span>
                                <Badge bg="warning" className="ms-2">
                                    € {dettagliPiatto.price}
                                </Badge>
                            </h5>
                            <div className="text-center">{dettagliPiatto.description}</div>
                        </div>
                    )}
                </Col>
            </Row>
        </Container>
    )
}

export default Dettaglio;