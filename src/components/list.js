import ListGroup from 'react-bootstrap/ListGroup';

function ListAllCSVFiles(props) {
  return (
    <ListGroup data-testid="list" style={{marginTop: '20px'}}>
      {
        !!props?.files?.files && props.files.files.map(function(name, index){
          return(
            <ListGroup.Item key={index} action href={name}>
              {name}
            </ListGroup.Item>
          )
        })
      }
      
    </ListGroup>
  );
}

export default ListAllCSVFiles;