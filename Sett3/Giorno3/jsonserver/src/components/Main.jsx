import axios from "axios";
import { useState, useEffect } from "react";
import { Container } from "react-bootstrap";
import SingleData from "./SingleData";
import miaVariabile from '../variables/variables';

const Main = () => {
    const [myData, setMyData] = useState([]);

    useEffect(() => {
        getData();
    }, []);

    const getData = () => {
        axios.get(miaVariabile.apiUrl + 'dbprova').then(response => {
            setMyData(response.data);
        });
    };

    return (
        <Container>
            <ul>
                {myData.map(element => {
                    return <SingleData key={element.id} data={element} />
                })}
            </ul>
        </Container>
    );
}

export default Main;