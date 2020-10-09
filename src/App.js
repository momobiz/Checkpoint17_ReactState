import React from 'react';
import {Button} from "react-bootstrap";
import visage from "./images/visage.jpg"
import './App.css';
import Person from './Composants/Person';
import "./styles.css";


class App extends React.Component {

 state={person:{fullName:"Mohamed Ali",
                bio:'bio',
                profession:'Developpeur',
               imgSrc:visage}, 
        show:false,
        count:0
      };
  stateAlter=()=>this.setState({show:!this.state.show})
    

  
  render(){

  
    return (
      <div> 
         <h1> Fiche de description </h1>
         <Button variant="primary" onClick={this.stateAlter} className="bouton">Afficher </Button>
      
       {this.state.show? ( <Person fullName={this.state.person.fullName} bio={this.state.person.bio}
             imgSrc={this.state.person.imgSrc} profession={this.state.person.profession}/>) :(null)}
     
      
      </div>
      

    )
   
}
componentDidMount=()=>{
  this.time=setInterval(()=>this.setState({count:this.state.count+1}),
  1000)
  console.log(this.time)
  
  
  
}
componentWillUnmount=()=>{
  clearInterval(this.time);
}


}

export default App;
