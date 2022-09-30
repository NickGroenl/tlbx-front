import Table from 'react-bootstrap/Table';

function TableCSVFiles() {
  return (
    <Table striped bordered hover style={{marginTop: '20px'}}>
      <thead> 
        <tr>
          <th>Filename</th>
          <th>Text</th>
          <th>Number</th>
          <th>Hex</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>Mark</td>
          <td>Otto</td>
          <td>@mdo</td>
        </tr>
        <tr>
          <td>2</td>
          <td>Jacob</td>
          <td>Thornton</td>
          <td>@fat</td>
        </tr>
        <tr>
          <td>3</td>
          <td colSpan={2}>Larry the Bird</td>
          <td>@twitter</td>
        </tr>
      </tbody>
    </Table>
  );
}

export default TableCSVFiles;