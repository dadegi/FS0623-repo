import React from "react";

class Testo extends React.Component {
    constructor(props) {
        super(props);
        this.cambiaTesto = this.cambiaTesto.bind(this);
    }

    cambiaTesto(e) {
        this.props.onChangeTesto(e.target.value);
    }

    render() {
        const testoRicerca = this.props.testoRicerca;
        return (
            <form>
                <label for="testoRicerca">Testo ricerca</label>
                <input type="text" name="testoRicerca" id="testoRicerca" value={testoRicerca} onChange={this.cambiaTesto} />
            </form>
        )
    }
}

export default Testo;