import React, {useEffect} from "react";
import {useSelector, useDispatch} from 'react-redux';


import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import ListAllCSVFiles from '../components/list';
import { setFiles } from "../store/reducer";
import { getFiles } from "../hooks/api";
const Home = () =>{
    const filess = useSelector((state) => state.files);
    const dispatch = useDispatch();
    useEffect(() => {
        (async () => {
            const files = await getFiles();
            dispatch(setFiles(files));
        })();
    }, []);

    return (
        <>
            <Navbar  variant="dark" bg="danger">
                <Navbar.Brand>React Test App</Navbar.Brand>
            </Navbar>
            <Container>
                <ListAllCSVFiles files={filess}/>
            </Container>
        </>
    )
}
export default Home;