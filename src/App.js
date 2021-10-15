import React, { Component } from 'react';
import './App.css';
import SimpsonList from './componenti/SimpsonList'

/*creazione della classe App con un bottone che mostra o nasconde la nostra liste degli elementi caricati 
tramite lista da un file json */
class App extends Component {

  state = {
    simpsonVisible : false,
  }
  handleClick = () =>{
    this.setState( prevState => ({
      simpsonVisible: !prevState.simpsonVisible
    }))
  }

  render(){
    return (
      <div className="App">
        <button class="btn" onClick={this.handleClick}> {this.state.simpsonVisible ? 'Nascondi' : 'Visualizza'} The Simpsons Family</button>
        {this.state.simpsonVisible &&  <SimpsonList  />}
      </div>
    );
  }
}

export default App;

