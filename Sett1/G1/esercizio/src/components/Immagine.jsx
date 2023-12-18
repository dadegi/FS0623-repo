import { Component } from "react";

class ImmagineComponent extends Component {
    render() {
        return (
            <img src={this.props.src} alt={this.props.alt} id={this.props.id}/>
        )
    }
}

export default ImmagineComponent;