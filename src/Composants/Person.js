import React from "react";
import {Card,ListGroup} from "react-bootstrap";


class Person extends React.Component{

  
    
 
 

    render(){
        
      
       
        return (
            <div>
     
        
        <Card style={{ width: '18rem',border:"solid" }}>
        <Card.Img variant="top" src={this.props.imgSrc} />
        <Card.Body>
            <Card.Title> Nom : {this.props.fullName} </Card.Title>
            <ListGroup variant="flush">
                <ListGroup.Item>Bio :{this.props.bio} </ListGroup.Item>
            <ListGroup.Item>Profession :{this.props.profession}</ListGroup.Item>
            
            </ListGroup>
        
        </Card.Body>
        </Card>
            </div>   
        
        )
    }
}
export default Person;
