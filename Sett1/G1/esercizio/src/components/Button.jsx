const Button = (props) => {
    return <button onClick={() => alert(`Hai cliccato il button ${props.label}`)}>{props.label}</button>
}

export default Button;