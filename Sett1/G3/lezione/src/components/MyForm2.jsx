import React from "react";

class MyForm2 extends React.Component {
    constructor(props) {
        super(props);
        this.state = {nomeSelect: '', nomeText: ''};
        this.handleChangeSelect = this.handleChangeSelect.bind(this);
        this.handleChangeText = this.handleChangeText.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChangeSelect(event) {
        this.setState({nomeSelect: event.target.value});
    }

    handleChangeText(event) {
        this.setState({nomeText: event.target.value});
    }

    handleSubmit(event) {
        event.preventDefault();
        if (this.state.nomeSelect === '') {
            alert('Non è stato scelto alcun nome!');
            return;
        }
        document.getElementById('nome2').innerHTML = `È stato scelto il nome ${this.state.nomeSelect}`;

        if(this.state.nomeText !== '') {
            document.getElementById('nome3').innerHTML = `È stato scritto il nome ${this.state.nomeText}`;
        } else {
            document.getElementById('nome3').innerHTML = '';
        }
    }

    render() {
        return (
            <>
                <form onSubmit={this.handleSubmit}>
                    <label for="scelta">Scegli un nome</label>
                    <select onChange={this.handleChangeSelect} id="scelta">
                        <option value="" defaultChecked></option>
                        <option value="pippo">Pippo</option>
                        <option value="pluto">Pluto</option>
                        <option value="paperino">Paperino</option>
                    </select>
                    <p>&nbsp;</p>
                    <label for="scrivi">Scrivi un nome</label>
                    <input type="text" id="scrivi" value={this.state.nomeText} onChange={this.handleChangeText} />
                    <button type="submit" id="manda">INVIA</button>
                </form>
                <h3 id="nome2"></h3>
                <h3 id="nome3"></h3>
            </>
        )
    }
}

export default MyForm2;