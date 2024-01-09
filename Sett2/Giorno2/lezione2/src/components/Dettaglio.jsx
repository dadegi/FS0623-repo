import { Alert } from "react-bootstrap";

const Dettaglio = (props) => (
    <Alert variant="success">
        <h2>Componente Dettaglio</h2>
        {props.selected || 'Nessun valore selezionato'}
    </Alert>
);

export default Dettaglio;