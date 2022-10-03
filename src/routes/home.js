import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import ListAllCSVFiles from '../components/list';
import TableCSVFiles from '../components/table';
const Home = () =>{
    return (
        <>
            <Navbar  variant="dark" bg="danger">
                <Navbar.Brand>React Test App</Navbar.Brand>
            </Navbar>
            <Container>
                <ListAllCSVFiles/>
                <TableCSVFiles/>
            </Container>
        </>
    )
}
export default Home;