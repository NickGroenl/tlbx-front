import React, {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import TableCSVFiles from '../components/table';
import {getFileByName} from "../hooks/api";
const CsvData = () => {
    const [useFiles, setFiles] = useState({});
    let {id} = useParams();
    useEffect(() => {
        (async () => {
            const files = await getFileByName(id);
            setFiles(files);
        })();
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