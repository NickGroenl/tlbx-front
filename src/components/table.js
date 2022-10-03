import Table from 'react-bootstrap/Table';

function TableCSVFiles(props) {
  console.log(props);
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
        {!!props?.files.length > 0 && props.files.map(function(array, index){
          return (
            <tr key={index}>
              {!!array?.file && <td>{array.file}</td>}
              {!!array?.text && <td>{array.text}</td>}
              {!!array?.number && <td>{array.number}</td>}
              {!!array?.hex && <td>{array.hex}</td>}
            </tr>
          )
        })}
        
      </tbody>
    </Table>
  );
}

export default TableCSVFiles;