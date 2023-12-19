import React from "react";

class Testo extends React.Component {
    constructor(props) {
        super(props);
        // Il bind serve per popolare con valori e flusso di istruzioni l'oggetto this
        this.cambiaTesto = this.cambiaTesto.bind(this);
    }

    // 3. Il metodo cambiaTesto chiama il metodo onChangeTesto ricevuto come props dal componente App e li passa come parametro il nuovo value del campo di input
    cambiaTesto(e) {
        this.props.onChangeTesto(e.target.value);
    }

    render() {
        // 1. Il component riceve come props testoRicerca e lo usa come value del campo di input
        const testoRicerca = this.props.testoRicerca;
        return (
            <form>
                <label for="testoRicerca">Testo ricerca</label>
                {/* 2. Quando nel campo di input si cambia valore, viene chiamato il metodo cambiaTesto */}
                <input type="text" name="testoRicerca" id="testoRicerca" value={testoRicerca} onChange={this.cambiaTesto} />
            </form>
        )
    }
}

export default Testo;