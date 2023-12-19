import { render } from "@testing-library/react";
import React from "react";

class State extends React.Component {
    constructor(props) {
        super(props);
        this.state = {conta: 0};
    }

    render() {
        return (
            <div>
                <h4>Hai cliccato {this.state.conta} volte</h4>
                <button onClick={() => this.setState({ conta: this.state.conta + 1 })}>Clicca</button>
            </div>
        )
    }
}

export default State;