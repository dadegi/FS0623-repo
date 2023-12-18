const Button = (props) => {
    return <button type="button" onClick={() => console.log(`io sono il button ${props.pippo}`)}>{props.pippo}</button>
}

export default Button;