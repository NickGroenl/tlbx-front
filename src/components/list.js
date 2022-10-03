import ListGroup from 'react-bootstrap/ListGroup';

function ListAllCSVFiles(props) {
  console.log(props)
  return (
    <ListGroup style={{marginTop: '20px'}}>
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