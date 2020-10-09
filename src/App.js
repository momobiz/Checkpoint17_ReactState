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
    const {count}=this.state;
  
    return (
    
      <div> 
         <h1> Fiche de description </h1>
         <Button variant="primary" onClick={this.stateAlter} className="bouton">Afficher </Button>
      
       {this.state.show? ( <Person fullName={this.state.person.fullName} bio={this.state.person.bio}
             imgSrc={this.state.person.imgSrc} profession={this.state.person.profession}/>) :(null)}
     
      <h2> Time : {count} </h2>
      </div>
      

    )
   
}

componentDidMount=()=>{
 this.time=setInterval(()=>this.setState({count:this.state.count+1}),1000);
  
}
componentWillUnmount=()=>{
 clearInterval(this.time);
}


}

export default App;
