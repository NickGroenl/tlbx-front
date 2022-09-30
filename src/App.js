import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import ListAllCSVFiles from './components/list';
import TableCSVFiles from './components/table';
function App() {
  return (
    <div className="App">
      <Navbar  variant="dark" bg="danger">
        <Navbar.Brand>React Test App</Navbar.Brand>
      </Navbar>
      <Container>
        <ListAllCSVFiles/>
        <TableCSVFiles/>
      </Container>
    </div>
  );
}

export default App;
