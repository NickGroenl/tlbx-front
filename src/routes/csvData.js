import axios from "axios";
import React, {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import TableCSVFiles from '../components/table';

const CsvData = () => {
    const [useFiles, setFiles] = useState({});
    let {id} = useParams();
    const getFileByName = async () => {
        const controller = new AbortController();
        await axios.post('https://tlbx-backend.herokuapp.com/v1/files/data/select/', {filename: id}, {
            signal: controller.signal
            }).then(function(response) {
                setFiles(response?.data);
            });
            return () => {
            controller.abort();
        };
    };
    useEffect(() => {
        getFileByName();
    }, []);
    return (
        <>
            <Navbar  variant="dark" bg="danger">
                <Navbar.Brand>React Test App</Navbar.Brand>
            </Navbar>
            <Container>
                <TableCSVFiles files={useFiles}/>
            </Container>
        </>
    )
}
export default CsvData;