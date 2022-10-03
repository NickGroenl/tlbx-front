import axios from "axios";
import React, {useEffect} from "react";
import {useSelector, useDispatch} from 'react-redux';


import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import ListAllCSVFiles from '../components/list';
import { setFiles } from "../store/reducer";
const Home = () =>{
    const filess = useSelector((state) => state.files);
    const dispatch = useDispatch();
    const getFiles = async () => {
        const controller = new AbortController();
        await axios.get('https://tlbx-backend.herokuapp.com/v1/files/data', {
            signal: controller.signal
            }).then(function(response) {
                dispatch(setFiles(response?.data?.files));
            });
            return () => {
            controller.abort();
        };
    };
    useEffect(() => {
        getFiles();
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